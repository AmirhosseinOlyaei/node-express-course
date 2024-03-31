const express = require("express");
const router = express.Router();
const {
  getPeople,
  addPerson,
  getPersonById,
  updatePerson,
  deletePerson,
  getPersonByName,
} = require("../controllers/people");

router.get("/", getPeople);
router.post("/", addPerson);
router.get("/:id", getPersonById);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);
router.get("/name/:name", getPersonByName);

module.exports = router;
