import React, { useState, useEffect } from "react";
import "./skills.css";
import CharacterCard from "../Character/Character.js";
import Navigation from "../../components/Navigation/Navigation.js";

const baseURL = "http://localhost:5000";

const Skills = () => {
  const [characters, setCharacters] = useState([]);
  const [newCharacterName, setNewCharacterName] = useState("");

  useEffect(() => {
    // Fetch characters from the backend on startup
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`${baseURL}/characters`);
        if (!response.ok) {
          throw new Error(`Error fetching characters: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data

        setCharacters(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCharacters();
  }, []);

  const addCharacter = async () => {
    if (newCharacterName.trim() === "") {
      return; // Don't add a character without a valid name
    }

    const newCharacter = {
      name: newCharacterName.trim(),
      skills: {
        strength: 0,
        defense: 0,
        speed: 0,
      },
      skillPoints: 10,
    };

    try {
      const response = await fetch(`${baseURL}/characters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCharacter),
      });

      if (!response.ok) {
        throw new Error(`Error adding character: ${response.statusText}`);
      }

      const addedCharacter = await response.json();
      setCharacters([...characters, addedCharacter]);
      console.log("Added character:", addedCharacter); // Log the added character

      // Clear the input field after adding
      setNewCharacterName("");
    } catch (error) {
      console.error("Error adding character:", error);
    }
  };

  const deleteCharacter = async (characterId) => {
    try {
      const response = await fetch(`${baseURL}/characters/${characterId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting character: ${response.statusText}`);
      }

      setCharacters(
        characters.filter((character) => character._id !== characterId)
      );
    } catch (error) {
      console.error("Error deleting character:", error);
    }
  };

  const allocateSkillPoint = async (characterId, skill) => {
    console.log("Allocating skill point for character ID:", characterId); // Check ID
    console.log(skill);

    if (characterId === undefined) {
      console.error("Character ID is undefined"); // Report if ID is missing
      return;
    }

    const updatedCharacters = characters.map((character) => {
      if (character._id === characterId) {
        // Check the ID
        return {
          ...character,
          skills: {
            ...character.skills,
            [skill]: character.skills[skill] + 1,
          },
          skillPoints: character.skillPoints - 1,
        };
      }
      return character;
    });

    setCharacters(updatedCharacters); // Update state

    try {
      const updatedCharacter = updatedCharacters.find(
        (c) => c._id === characterId
      );

      console.log("Updated character for PUT:", updatedCharacter); // Check the updated data

      const response = await fetch(`${baseURL}/characters/${characterId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCharacter),
      });

      if (!response.ok) {
        throw new Error(`Error updating character: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error updating character:", error);
    }
  };

  const resetCharacter = async (characterId) => {
    const updatedCharacters = characters.map((character) => {
      if (character._id === characterId) {
        return {
          ...character,
          skills: {
            strength: 0,
            defense: 0,
            speed: 0,
          },
          skillPoints: 10,
        };
      }
      return character;
    });

    setCharacters(updatedCharacters);

    try {
      const updatedCharacter = updatedCharacters.find(
        (c) => c._id === characterId
      );
      const response = await fetch(`${baseURL}/characters/${characterId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCharacter),
      });

      if (!response.ok) {
        throw new Error(`Error resetting character: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error resetting character:", error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="container">
        <h1>Fighting Game: Skill Point Allocation</h1>
        {/* Input field for character name */}
        <div className="character-input">
          <input
            type="text"
            placeholder="Enter character name"
            value={newCharacterName}
            onChange={(e) => setNewCharacterName(e.target.value)}
          />
          <button className="button" onClick={addCharacter}>
            Add Character
          </button>
        </div>
        <div className="character-list">
          {characters.map((character) => (
            <CharacterCard
              key={character._id}
              character={character}
              onAllocate={allocateSkillPoint}
              onReset={resetCharacter}
              onDelete={() => deleteCharacter(character._id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
