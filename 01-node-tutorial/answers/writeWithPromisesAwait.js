const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("temp.txt", "Line 1\n");
    await writeFile("temp.txt", "Line 2\n", { flag: "a" });
    await writeFile("temp.txt", "Line 3\n", { flag: "a" });
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
