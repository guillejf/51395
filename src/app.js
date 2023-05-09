import express from "express";
import { productsRouter } from "./routes/products.router.js";
import { petsRouter } from "./routes/pets.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`);
});

//TODOS MIS ENDPOINTS
app.use("/products", productsRouter);
app.use("/pets", petsRouter);

//OTROS ENDPOINTS
app.get("*", (req, res) => {
  return res
    .status(404)
    .json({ status: "error", msg: "no se encuentra esa ruta", data: {} });
});
