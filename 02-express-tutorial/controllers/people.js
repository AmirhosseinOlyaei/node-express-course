const { people } = require("../data");

const getPeople = (req, res) => {
  res.json(people);
};

const addPerson = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    const newPerson = { id: people.length + 1, name: req.body.name };
    people.push(newPerson);
    res.status(201).json({ success: true, person: newPerson });
  }
};

const getPersonById = (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find(p => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ success: false, message: "Person not found" });
  }
};

const updatePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const personIndex = people.findIndex(p => p.id === id);
  if (personIndex !== -1) {
    const updatedPerson = { ...people[personIndex], ...req.body };
    people[personIndex] = updatedPerson;
    res.json(updatedPerson);
  } else {
    res.status(404).json({ success: false, message: "Person not found" });
  }
};

const deletePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const newPeople = people.filter(p => p.id !== id);
  if (newPeople.length !== people.length) {
    people.length = 0; // Clear the array
    people.push(...newPeople); // Push the updated array
    res.json({ success: true, message: "Person deleted" });
  } else {
    res.status(404).json({ success: false, message: "Person not found" });
  }
};

module.exports = { getPeople, addPerson, getPersonById, updatePerson, deletePerson };
