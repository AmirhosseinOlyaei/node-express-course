// In this modified version of the program, the server generates a random number between 1 and 100. The user is prompted to guess the number, and the server responds with a message indicating whether the guess is too low, too high, or correct. The game continues until the user guesses the correct number.

const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

let randomNumber = Math.floor(Math.random() * 100) + 1;
let message = "Guess a number between 1 and 100";

const form = () => {
  return `
  <body>
  <p>${message}</p>
  <form method="POST">
  <input type="number" name="guess" min="1" max="100"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      const userGuess = parseInt(body["guess"], 10);
      if (userGuess === randomNumber) {
        message = "Congratulations! You guessed the number!";
      } else if (userGuess < randomNumber) {
        message = "Too low! Try again.";
      } else {
        message = "Too high! Try again.";
      }
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
