import express from "express";
import { productsRouter } from "./routes/products.router.js";
import { petsRouter } from "./routes/pets.router.js";
import { testPlantillaProducts } from "./routes/test-plantilla-products.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`);
});

//TODOS MIS ENDPOINTS TIPO API REST/JSON
app.use("/api/products", productsRouter);
app.use("/api/pets", petsRouter);

//QUIERO DEVOLVER HTML DIRECTO PAGINA COMPLETA ARMADA EN EL BACK
app.use("/test-plantilla-products", testPlantillaProducts);

//OTROS ENDPOINTS
app.get("*", (req, res) => {
  return res
    .status(404)
    .json({ status: "error", msg: "no se encuentra esa ruta", data: {} });
});
