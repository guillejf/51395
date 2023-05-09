import express from "express";
import { pets } from "../utils.js";

export const petsRouter = express.Router();

petsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const petEncontrada = pets.find((p) => p.id == id);
  return res.status(200).json({
    status: "success",
    msg: "pet encontrado",
    data: petEncontrada,
  });
});

petsRouter.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: "success", msg: "todos los pets", data: pets });
});

petsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  pets = pets.filter((p) => p.id != id);
  return res
    .status(200)
    .json({ status: "success", msg: "pet borrada", data: {} });
});

petsRouter.post("/", (req, res) => {
  const pet = req.body;
  pet.id = (Math.random() * 1000000000000000).toFixed(0);
  pet.createdAt = Date.now();
  pets.push(pet);
  return res
    .status(201)
    .json({ status: "success", msg: "pet ingresada", data: pet });
});

petsRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const pet = req.body;
  const indiceEncontrado = pets.findIndex((p) => p.id == id);
  pets[indiceEncontrado] = {
    id: pets[indiceEncontrado].id,
    ...pet,
  };
  return res.status(200).json({
    status: "success",
    msg: "pet modificado",
    data: pets[indiceEncontrado],
  });
});