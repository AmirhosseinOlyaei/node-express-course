// 12-http.js. This program should use the built-in http module to create a simple web server that listens on port 3000. This is done with the createServer function. You pass it a callback function that checks the request variable (req) for the current url property, and depending on what the URL is, sends back a message to the browser screen. Then have your code listen on port 3000, run this file with the node command, and test it from your browser, by navigating to http://localhost:3000. You can look at 12-http.js for the instructor’s answer (except that program listens on 5000). You will need to type in Ctrl+c (the Ctrl key plus the letter “C” at the same time; or for Mac the Cmd key plus the letter “C” at the same time) to exit your program.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage!");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page!");
  } else {
    res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you're looking for.</p>
            <a href="/">Back to homepage</a>
        `);
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});