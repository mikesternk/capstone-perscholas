// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";
// import "dotenv/config";
// import connectToDb from "./config/connectToDb.js";
// // import Character from "./Models/Characters/Characters.js";

// // Connect to MongoDB
// // mongoose.connect("mongodb://localhost:27017/fighting_game", {});

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const corsOptions = {
//   origin: "http://localhost:3000/skills", // or your frontend domain
//   methods: "GET,POST,PUT,DELETE", // Ensure DELETE is allowed
// };
// app.use(cors(corsOptions));

// // Define the Character schema
// const characterSchema = new mongoose.Schema({
//   name: String,
//   skillPoints: Number,
//   skills: {
//     strength: Number,
//     defense: Number,
//     speed: Number,
//   },
// });

// const Character = mongoose.model("Character", characterSchema);

// app.get("/characters", async (req, res) => {
//   const characters = await Character.find();
//   res.json(characters);
// });

// app.post("/characters", async (req, res) => {
//   const newCharacter = new Character(req.body);
//   await newCharacter.save();
//   res.json(newCharacter);
// });

// app.delete("/characters/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Character.findByIdAndDelete(id);
//     res.json({ message: "Character deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting character", error });
//   }
// });

// app.put("/characters/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedCharacter = await Character.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     res.json(updatedCharacter);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating character", error });
//   }
// });

// const port = process.env.PORT;

// connectToDb();

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// MongoDB connection string
const mongoUrl =
  "mongodb+srv://mikesternk:mike2002@cluster0.vdnipvb.mongodb.net/fighting-game?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Create Express app
const app = express();

// Port for the backend server
const PORT = 5000;

// Middleware for parsing JSON requests
app.use(express.json());

// Allow cross-origin requests from the frontend
const corsOptions = {
  origin: "http://localhost:3000/skills", // Frontend origin
  methods: "GET, POST, PUT, DELETE", // Allowed HTTP methods
};
app.use(cors(corsOptions));

// Define the character schema and model
const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skillPoints: { type: Number, required: true },
  skills: {
    strength: { type: Number, required: true },
    defense: { type: Number, required: true },
    speed: { type: Number, required: true },
  },
});

const Character = mongoose.model("Character", characterSchema);

// GET all characters
app.get("/characters", async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching characters", error });
  }
});

// POST new character
app.post("/characters", async (req, res) => {
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
});

// DELETE a character by ID
app.delete("/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Character.findByIdAndDelete(id);
    res.json({ message: "Character deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting character", error });
  }
});

// PUT update a character's skill points
app.put("/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCharacter = await Character.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCharacter);
  } catch (error) {
    res.status(500).json({ message: "Error updating character", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
