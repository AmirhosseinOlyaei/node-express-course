// 06-jobs-api/starter/controllers/auth.js
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};
// const register = async (req, res) => {
//   res.status(StatusCodes.CREATED).json(await User.create({ ...req.body }));

//   const { name, email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw new Error("User already exists");
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({
//     name,
//     email,
//     password: hashedPassword,
//   });
//   const savedUser = await newUser.save();
//   sendMail(
//     email,
//     "Verify Your Email",
//     "Verify Email",
//     '<a href="http://localhost:3000/api/auth/verify-email?token=' +
//       generateToken(savedUser) +
//       '">Verify Email</a>'
//   );
//   res.status(201).json({ message: "User created successfully" });
//   console.log(savedUser);
//   console.log(generateToken(savedUser));
//   console.log(req.body);
//   console.log(req.headers);
//   console.log(req.query);
//   console.log(req.params);
//   console.log(req.cookies);
//   console.log(req.session);
//   console.log(req.user);
//   console.log(req.isAuthenticated());
//   console.log(req.originalUrl);
//   console.log(req.method);
//   console.log(req.path);
//   console.log(req.baseUrl);
//   console.log(req.hostname);
//   console.log(req.protocol);
//   console.log(req.ip);
//   console.log(req.route);
//   console.log(req.url);
// };

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ token, user: { name: user.name } });
};

module.exports = {
  register,
  login,
};
