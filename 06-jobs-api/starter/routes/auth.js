// 06-jobs-api/starter/routes/auth.js
const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth");

// const passport = require("passport");
// const bcrypt = require("bcryptjs");
// const User = require("../../models/user");
// const { authenticated } = require("../../config/auth");
// const { generateToken } = require("../../config/jwt");
// const { sendMail } = require("../../config/mail");
// const { google } = require("googleapis");
// import * as jwt from "jsonwebtoken";
// import { register } from "../controllers/auth";
// const { OAuth2 } = google.auth;
// const CLIENT_ID = "1<YOUR_GoogleOAuthClientID_HERE>";
// const CLIENT_SECRET = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
// const REDIRECT_URI = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
// const REFRESH_TOKEN = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET);
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post("/register", register);
router.post("/login", login);

// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({ message: info.message });
//     }
//     req.logIn(user, (err) => {
//       if (err) {
//         return next(err);
//       }
//       return res.json({ user });
//     });
//   })(req, res, next);
// });

// router.get("/verify-email", async (req, res) => {
//   const { token } = req.query;
//   const decoded = jwt.verify(token, "secret");
//   const user = await User.findById(decoded.id);
//   user.isVerified = true;
//   await user.save();
//   res.redirect("XXXXXXXXXXXXXXXXXXXXXXXXXXX");
// });

// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/google/callback",
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   (req, res) => {
//     res.redirect("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//   }
// );

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// });

module.exports = router;
