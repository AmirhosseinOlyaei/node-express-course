const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    res.json({ id: req.params.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    res.send("update task");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    res.send("delete task");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
