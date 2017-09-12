const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  'Project_Name': {
    type: String,
    required: true
  },
  'Developers': [{ type: mongoose.Schema.Types.ObjectId }],
  'Project_Manager': {
    type: String
  }
});

const Project = (module.exports = mongoose.model("Project", projectSchema));
