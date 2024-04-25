import React from "react";
import "./character.css";

const CharacterCard = ({ character, onAllocate, onReset, onDelete }) => {
  const { name, skills, skillPoints } = character;

  const allocateSkillPoint = (skill) => {
    if (skillPoints > 0 && skills[skill] < 10) {
      onAllocate(character.id, skill);
    }
  };

  return (
    <div className="character-card">
      <h2>{name}</h2>
      <p>Skill Points Available: {skillPoints}</p>
      <div className="skill">
        <p>Strength: {skills.strength}</p>
        <button
          className="button"
          onClick={() => allocateSkillPoint("strength")}
          disabled={skillPoints <= 0}
        >
          +1 Strength
        </button>
      </div>
      <div className="skill">
        <p>Defense: {skills.defense}</p>
        <button
          className="button"
          onClick={() => allocateSkillPoint("defense")}
          disabled={skillPoints <= 0}
        >
          +1 Defense
        </button>
      </div>
      <div className="skill">
        <p>Speed: {skills.speed}</p>
        <button
          className="button"
          onClick={() => allocateSkillPoint("speed")}
          disabled={skillPoints <= 0}
        >
          +1 Speed
        </button>
      </div>
      <div className="reset">
        <button className="button" onClick={() => onReset(character.id)}>
          Reset
        </button>
      </div>
      {/* Delete button */}
      <div className="delete">
        <button className="button" onClick={() => onDelete(character.id)}>
          Delete Character
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
