const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("temp.txt", "Line 1\nLine 2\nLine 3\n");
    console.log("File written successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

async function reader() {
  try {
    const content = await readFile("temp.txt", "utf8");
    console.log("File content:", content);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite();
