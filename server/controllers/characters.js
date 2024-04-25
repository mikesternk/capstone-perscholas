import Character from "../models/characters/characters";

export const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching characters", error });
  }
};

export const newCharacter = async (req, res) => {
  try {
    const newCharacter = new Character({
      name: req.body.name,
      skillPoints: req.body.skillPoints,
      skills: {
        strength: req.body.skills.strength,
        defense: req.body.skills.defense,
        speed: req.body.skills.speed,
      },
    });
    await newCharacter.save();
    res.json(newCharacter);
  } catch (error) {
    res.status(500).json({ message: "Error adding character", error });
  }
};

export const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCharacter = await Character.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCharacter);
  } catch (error) {
    res.status(500).json({ message: "Error updating character", error });
  }
};

export const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    await Character.findByIdAndDelete(id);
    res.json({ message: "Character deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting character", error });
  }
};
