const EventEmitter = require("events");
const emitter = new EventEmitter();

// Emitting events with a timer
setInterval(() => {
  emitter.emit("timer", "Timer event occurred!");
}, 2000);

emitter.on("timer", (msg) => console.log(msg));

// Refactored async function that waits on an event using an IIFE and setTimeout
(async () => {
  // Create an artificial 2 second delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Emit a custom event
  emitter.emit("my-custom-event", "Hello World!");
})();

// Listen for custom event and log the result to the console
emitter.on("my-custom-event", (event) =>
  console.log("We got an event! Here it is:", event)
);

// Emitting and handling multiple events
emitter.on("greet", (name) => console.log(`Hello, ${name}!`));
emitter.on("farewell", (name) => console.log(`Goodbye, ${name}!`));

emitter.emit("greet", "Alice");
emitter.emit("farewell", "Bob");

// Chaining events
emitter.on("firstEvent", () => {
  console.log("First event handled.");
  emitter.emit("secondEvent");
});

emitter.on("secondEvent", () => {
  console.log("Second event handled.");
});

emitter.emit("firstEvent");
