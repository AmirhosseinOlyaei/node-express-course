// 06-jobs-api/starter/middleware/authentication.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../utils/errors");

module.exports = (req, res, next) => {
  //   const authHeader = req.get("Authorization");
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthorizedError("No authorization header");
  }

  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    // req.user = User.findById(decodedToken.userId).select("-password");
    req.user = { userId: decodedToken.userId, name: decodedToken.name };
    next();
  } catch (err) {
    throw new UnauthorizedError("Invalid token");
  }
  if (!decodedToken) {
    throw new UnauthorizedError("No token");
  }

  // const { userId } = decodedToken;
  // User.findById(userId)
  //   .then((user) => {
  //     if (!user) {
  //       throw new UnauthorizedError("Invalid token");
  //     }
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => next(err));
};
