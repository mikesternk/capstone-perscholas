import mongoose from "mongoose";

// Define the Character schema
const characterSchema = new mongoose.Schema({
  name: String,
  skillPoints: Number,
  skills: {
    strength: Number,
    defense: Number,
    speed: Number,
  },
});

const Character = mongoose.model("Character", characterSchema);

export default Character;
