console.log("Express Tutorial");

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
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  res.send("Hello World");
});

// An app.all statement after these to handle page not found conditions.
app.all("*", (req, res) => {
  res.send("Page not found");
});
