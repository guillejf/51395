// NO INCLUIR LOS node_modules

const express = require("express");
//importamos en ProductManager que esta en otro archivo

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.get("/products/", (req, res) => {
  const query = req.query;
  console.log(query);
  //if me enviaron por query el ?limit= algo, entonces solo envio esa cantidad.
  res.json({
    /* todos los productos hasta el limite que me piden */
  });

  //si no aclararon nada en query... entonces directo mando todos los productos
  res.json({
    /* todos los productos hasta el limite que me piden */
  });
});

app.get("/products/:id", (req, res) => {
  /* const id = req.params.id;
  const cuadroEncontrado = cuadros.find((c) => c.id == id);
  res.json(cuadroEncontrado); */
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//EJEMPLO DE LA CLASE

/* let cuadros = [
  { id: 10, cuadro: "real madrid", apodo: "los galacticos jajaja " },
  { id: 11, cuadro: "tigre", apodo: "felinos" },
  { id: 12, cuadro: "river", apodo: "el mas grande (?) (de que?)" },
]; */

/* app.get("/cuadro/:id", (req, res) => {
  const id = req.params.id;
  const cuadroEncontrado = cuadros.find((c) => c.id == id);
  res.json(cuadroEncontrado);
}); */

/* app.get("/cuadro", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send("hola query");
}); */

/* app.get("/elmejorcuadro", (req, res) => {
  res.json({ cuadro: "boca juniors", apodo: "boquita!" });
});

app.get("/elpeor", (req, res) => {
  res.json({ cuadro: "real madrid", apodo: "los galacticos jajaja " });
});

app.get("/elcuadrotigre", (req, res) => {
  res.json({ cuadro: "tigre", apodo: "los gatitos inofensivos" });
}); */
