console.log("Express Tutorial");
// const { products, people } = require("./data");

// The require statement to import the express module
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const peopleRouter = require("./routes/people");

// Creation of the app as returned from calling express()
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

// app.use statements for the middleware. You’ll eventually use many kinds of middleware, but for now the only middleware we are using is express.static().
app.use(express.static("./methods-public"));
// Middleware for URL-encoded Form Data
app.use(express.urlencoded({ extended: true }));
// Middleware for parsing JSON bodies
app.use(express.json());
app.use(logger);
// Middleware to parse cookies
app.use(cookieParser());
app.use(authRoutes);
app.use("/api/v1/people", peopleRouter);

app.get("/", logger, (req, res) => {
  console.log("Home");
});

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
