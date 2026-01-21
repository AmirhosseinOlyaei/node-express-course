// 06-jobs-api/starter/routes/jobs.js
const express = require("express");
const router = express.Router();

const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} = require("../controllers/jobs");

const { checkToken } = require("../middlewares/auth");

router.post("/", checkToken, createJob);
router.get("/", checkToken, getAllJobs);
router.get("/:id", checkToken, getJob);
router.delete("/:id", checkToken, deleteJob);
router.patch("/:id", checkToken, updateJob);

module.exports = router;
