// 05-JWT-Basics/starter/controllers/main.js
const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }

  try {
    const id = new Date().getDate();
    const tokenLifetime = process.env.JWT_LIFETIME || '30d';

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: tokenLifetime,
    });

    res.status(200).json({ msg: "user created", token });
  } catch (error) {
    throw new BadRequestError("Failed to create token");
  }
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
