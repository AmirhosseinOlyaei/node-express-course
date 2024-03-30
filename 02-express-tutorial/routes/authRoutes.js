const express = require("express");
const router = express.Router();
const { auth, logon, logoff, test } = require("../controllers/authController");

router.post("/logon", logon);
router.delete("/logoff", logoff);
router.get("/test", auth, test);

module.exports = router;
