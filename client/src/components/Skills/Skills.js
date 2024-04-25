import React, { useState, useEffect } from "react";
import axios from "axios";
import "./skills.css";
import CharacterCard from "../Character/Character.js";
import Navigation from "../../components/Navigation/Navigation.js";

const baseURL = "http://localhost:5000";
const Skills = () => {
  const [characters, setCharacters] = useState([]);
  const [newCharacterName, setNewCharacterName] = useState("");

  useEffect(() => {
    // Fetch characters from the backend on startup
    axios.get(`${baseURL}/characters`).then((res) => {
      console.log("Characters", res.data);
      setCharacters(res.data);
    });
  }, []);

  const addCharacter = () => {
    if (newCharacterName.trim() === "") {
      // Do not add a character without a valid name
      return;
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

    // Save the new character to the backend
    axios.post(`${baseURL}/characters`, newCharacter).then((res) => {
      setCharacters([...characters, res.data]);
    });

    // Clear the input field after adding
    setNewCharacterName("");
  };

  const deleteCharacter = (characterId) => {
    // Delete the character from the backend
    axios.delete(`${baseURL}/characters/${characterId}`).then(() => {
      setCharacters(
        characters.filter((character) => character.id !== characterId)
      );
    });
  };

  const allocateSkillPoint = (characterId, skill) => {
    setCharacters(
      characters.map((character) => {
        if (character.id === characterId) {
          return {
            ...character,
            skills: {
              [skill]: character.skills[skill] + 1,
            },
            skillPoints: character.skillPoints - 1,
          };
        }
        return character;
      })
    );

    // Update the character in the backend
    const updatedCharacter = characters.find((c) => c.id === characterId);
    axios.put(`${baseURL}/characters/${characterId}`, updatedCharacter);
  };

  const resetCharacter = (characterId) => {
    setCharacters(
      characters.map((character) => {
        if (character.id === characterId) {
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
      })
    );

    // Update the character in the backend
    const updatedCharacter = characters.find((c) => c.id === characterId);
    axios.put(`${baseURL}/characters/${characterId}`, updatedCharacter);
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
