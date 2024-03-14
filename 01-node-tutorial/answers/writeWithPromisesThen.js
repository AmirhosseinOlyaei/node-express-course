const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Line 1\n")
  .then(() => {
    console.log("Line 1 written");
    return writeFile("temp.txt", "Line 2\n", { flag: "a" });
  })
  .then(() => {
    console.log("Line 2 written");
    return writeFile("temp.txt", "Line 3\n", { flag: "a" });
  })
  .then(() => {
    console.log("Line 3 written");
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
