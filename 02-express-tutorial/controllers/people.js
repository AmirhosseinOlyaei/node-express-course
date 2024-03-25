const { people } = require("../data");

const getPeople = (req, res) => {
  try {
    res.json(people);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const addPerson = (req, res) => {
  try {
    if (!req.body.name) {
      res
        .status(400)
        .json({ success: false, message: "Please provide a name" });
    } else {
      const newPerson = { id: people.length + 1, name: req.body.name };
      people.push(newPerson);
      res.status(201).json({ success: true, person: newPerson });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getPersonById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const person = people.find((p) => p.id === id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ success: false, message: "Person not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const updatePerson = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const personIndex = people.findIndex((p) => p.id === id);
    if (personIndex !== -1) {
      const updatedPerson = { ...people[personIndex], ...req.body };
      people[personIndex] = updatedPerson;
      res.json(updatedPerson);
    } else {
      res.status(404).json({ success: false, message: "Person not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deletePerson = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newPeople = people.filter((p) => p.id !== id);
    if (newPeople.length !== people.length) {
      people.length = 0; // Clear the array
      people.push(...newPeople); // Push the updated array
      res.json({ success: true, message: "Person deleted" });
    } else {
      res.status(404).json({ success: false, message: "Person not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getPersonByName = (req, res) => {
  try {
    const { name } = req.params;
    const person = people.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );

    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ success: false, message: "Person not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  getPeople,
  addPerson,
  getPersonById,
  updatePerson,
  deletePerson,
  getPersonByName,
};
