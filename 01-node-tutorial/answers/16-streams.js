const fs = require("fs");

const readStream = fs.createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

let counter = 0;

readStream.on("data", (chunk) => {
  counter++;
  console.log("Chunk received:", chunk);
});

readStream.on("end", () => {
  console.log(`Number of chunks received: ${counter}`);
});

readStream.on("error", (error) => {
  console.error("Error reading stream:", error);
});
