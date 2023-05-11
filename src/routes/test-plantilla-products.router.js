import express from "express";
import { productos } from "../utils.js";

export const testPlantillaProducts = express.Router();

testPlantillaProducts.get("/", (req, res) => {
  return res.send("hola mundo");
  /* return res.status(200).send(
    `
      ` */

  //   return res.status(200).json({
  // status: "success",
  // msg: "todos los productos",
  // data: productos,
  //   });
});
