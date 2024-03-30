console.log("Express Tutorial");
const { products, people } = require("./data");

// The require statement to import the express module
const express = require("express");

// Creation of the app as returned from calling express()
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

// app.use statements for the middleware. You’ll eventually use many kinds of middleware, but for now the only middleware we are using is express.static().
app.use(express.static("./methods-public"));

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(logger);

app.get("/", logger, (req, res) => {
  console.log("Home");
});

// People router
const peopleRouter = require("./routes/people");
app.use("/api/v1/people", peopleRouter);

// Products routes
// app.get("/api/v1/products", async (req, res) => {
//   try {
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// http://localhost:3000/api/v1/products/1
// app.get("/api/v1/products/:productID", async (req, res) => {
//   try {
//     const idToFind = parseInt(req.params.productID);
//     const product = products.find((p) => p.id === idToFind);

//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ message: "That product was not found." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// http://localhost:3000/api/v1/products/under/30
// app.get("/api/v1/products/under/:price", async (req, res) => {
//   try {
//     const maxPrice = parseFloat(req.params.price);
//     const filteredProducts = products.filter((p) => p.price <= maxPrice);

//     res.json(filteredProducts);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// http://localhost:3000/api/v1/query?search=a&limit=2
// app.get("/api/v1/query", async (req, res) => {
//   try {
//     const { search, limit } = req.query;
//     let filteredProducts = products;

//     if (search) {
//       filteredProducts = filteredProducts.filter((p) =>
//         p.name.includes(search)
//       );
//     }

//     if (limit) {
//       filteredProducts = filteredProducts.slice(0, parseInt(limit));
//     }

//     res.json(filteredProducts);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.get and app.post statements for the routes you will handle. Eventually these will be refactored into router modules, but for now you can put them inline.
// app.get("/get", async (req, res) => {
//   try {
//     res.send("Getting ...");
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.post("/post", async (req, res) => {
//   try {
//     res.send("Posting!");
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.get("/api/v1/test", async (req, res) => {
//   try {
//     res.json({ message: "It worked!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// An app.all statement after these to handle page not found conditions.
app.all("*", async (req, res) => {
  try {
    res.send("Page not found");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
