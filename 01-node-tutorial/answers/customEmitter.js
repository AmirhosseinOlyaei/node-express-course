const EventEmitter = require("events");
const emitter = new EventEmitter();

// Emitting events with a timer
setInterval(() => {
  emitter.emit("timer", "Timer event occurred!");
}, 2000);

emitter.on("timer", (msg) => console.log(msg));

// Async function that waits on an event
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("eventWait", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("We got an event! Here it is:", msg);
};

doWait();
emitter.emit("eventWait", "Hello World!");

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
