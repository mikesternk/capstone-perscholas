import express from "express";
import {
  getCharacters,
  newCharacter,
  deleteCharacter,
  updateCharacter,
} from "../controllers/characters.js";

const router = express.Router();

router.get("/", getCharacters);

router.post("/", newCharacter);

router.delete("/:id", deleteCharacter);

router.put("/:id", updateCharacter);
