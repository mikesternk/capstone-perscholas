// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";
// import "dotenv/config";
// import connectToDb from "./config/connectToDb.js";
// // import Character from "./models/Characters/Characters.js";

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
import cors from "cors";

import connectToDb from "./config/connectToDb.js";
import Character from "./models/characters/characters.js";
// import characterRoutes from "./routes/characters.js";

// Connect to MongoDB
connectToDb();

// Create Express app
const app = express();

// Port for the backend server
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON requests
app.use(express.json({ limit: "30mb" }));

// Allow cross-origin requests from the frontend
// const corsOptions = {
//   origin: "http://localhost:3000/", // Frontend origin
//   methods: "GET, POST, PUT, DELETE", // Allowed HTTP methods
// };
app.use(cors());

// app.use("/characters", characterRoutes);

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
  const { id } = req.params;
  const { name, skills, skillPoints } = req.body;

  try {
    // Assume you're using a Mongoose model named "Character"
    const updatedCharacter = await Character.findByIdAndUpdate(
      id,
      { name, skills, skillPoints },
      { new: true }
    );

    if (!updatedCharacter) {
      return res.status(404).json({ message: "Character not found." });
    }

    res.json(updatedCharacter);
  } catch (error) {
    console.error("PUT error:", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
