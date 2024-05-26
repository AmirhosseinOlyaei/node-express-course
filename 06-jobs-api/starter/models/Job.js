// 06-jobs-api/starter/models/Job.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    salary: {
      type: Number,
    },
    // created_at: {
    //   type: Date,
    //   default: Date.now,
    // },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
