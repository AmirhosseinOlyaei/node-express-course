console.log("Express Tutorial");
const { products } = require("./data");

// The require statement to import the express module
const express = require("express");

// Creation of the app as returned from calling express()
const app = express();

// app.use statements for the middleware. You’ll eventually use many kinds of middleware, but for now the only middleware we are using is express.static().
app.use(express.static("./public"));

// Listen on port 3000
app.listen(3000, () => {
  console.log("App listening on port 3000");
});

// app.get and app.post statements for the routes you will handle. Eventually these will be refactored into router modules, but for now you can put them inline.
app.get("/get", (req, res) => {
  res.send("Getting ...");
});
app.post("/post", (req, res) => {
  res.send("Posting!");
});
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

// http://localhost:3000/api/v1/products/1
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "That product was not found." });
  }
});

// http://localhost:3000/api/v1/query?search=a&limit=2
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let filteredProducts = products;

  if (search) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.startsWith(search)
    );
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, parseInt(limit));
  }

  res.json(filteredProducts);
});

// http://localhost:3000/api/v1/products/under/30
app.get("/api/v1/products/under/:price", (req, res) => {
  const maxPrice = parseFloat(req.params.price);
  const filteredProducts = products.filter((p) => p.price <= maxPrice);

  res.json(filteredProducts);
});

// An app.all statement after these to handle page not found conditions.
app.all("*", (req, res) => {
  res.send("Page not found");
});
