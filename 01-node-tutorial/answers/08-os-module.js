// 08-os-module.js: This should load the built-in os Node module and display some interesting information from the resulting object. As for all modules, you load a reference to it with a require statement, in this case

const os = require("os");

console.log("Current User Info:", os.userInfo());
console.log("System Uptime:", os.uptime(), "seconds");
console.log("Uptime:", os.uptime() / 3600, "hours");
console.log("Operating System Type:", os.type());
console.log("Operating System Release:", os.release());
console.log("Total System Memory:", os.totalmem(), "bytes");
console.log("Total Memory:", os.totalmem() / 1024 / 1024 / 1024, "GB"); // Total system memory in GB
console.log("Free System Memory:", os.freemem(), "bytes");
console.log("Free Memory:", os.freemem() / 1024 / 1024 / 1024, "GB"); // Free system memory in GB
console.log("Home Directory of the Current User:", os.homedir());
console.log("CPU Information:", os.cpus());
console.log("CPU Architecture:", os.arch());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Operating System Platform:", os.platform());
console.log("Default Directory for Temporary Files:", os.tmpdir());
console.log("Hostname of the Operating System:", os.hostname());
console.log("Average Load on the System:", os.loadavg());
console.log("CPU Cores:", os.cpus().length);
