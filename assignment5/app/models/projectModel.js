const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  'project_name': {
    type: String,
    required: true
  },
  'developers': [{ type: mongoose.Schema.Types.ObjectId }],
  'project_manager': {
    type: String
  }
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
