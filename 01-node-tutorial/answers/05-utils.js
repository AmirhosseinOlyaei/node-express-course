// (3b). 05-utils.js should export a single value, which is a function you will call in 03-modules.js.

const sayHi = (name) => {
  console.log(`Hello ${name}`);
};

module.exports = sayHi;
