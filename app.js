const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`);
});

let productos = [
  {
    id: "234514872813534",
    name: "real madridd",
    price: 100,
    createdAt: 1683242395115,
  },
  {
    id: "456514872813512",
    name: "tigre",
    price: 150,
    createdAt: 1683242395117,
  },
  {
    id: "846514872813578",
    name: "river",
    price: 170,
    createdAt: 1683242395118,
  },
];
//INICIO ENDPOINT PRODUCTS
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const productoEncontrado = productos.find((p) => p.id == id);
  return res.status(200).json({
    status: "success",
    msg: "producto encontrado",
    data: productoEncontrado,
  });
});

app.get("/products", (req, res) => {
  return res
    .status(200)
    .json({ status: "success", msg: "todos los productos", data: productos });
});

//BORRAR UN PRODUCTO > SI TENGO QUE PASAR EL ID
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  productos = productos.filter((p) => p.id != id);
  return res
    .status(200)
    .json({ status: "success", msg: "producto eliminado", data: {} });
});

//CREAR UN PRODUCTO (NO NECESITO PASAR ID)
app.post("/products", (req, res) => {
  const producto = req.body;
  producto.id = (Math.random() * 1000000000000000).toFixed(0);
  producto.createdAt = Date.now();
  productos.push(producto);
  return res
    .status(201)
    .json({ status: "success", msg: "producto creado", data: producto });
});

//MODIFICAR UN PRODUCTO > SI TENGO QUE PASAR EL ID
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const producto = req.body;
  const indiceEncontrado = productos.findIndex((p) => p.id == id);
  productos[indiceEncontrado] = {
    id: productos[indiceEncontrado].id,
    ...producto,
  };
  return res.status(200).json({
    status: "success",
    msg: "producto modificado",
    data: productos[indiceEncontrado],
  });
});

//FIN ENDPOINT PRODUCTS

app.get("*", (req, res) => {
  return res
    .status(404)
    .json({ status: "error", msg: "no se encuentra esa ruta", data: {} });
});
