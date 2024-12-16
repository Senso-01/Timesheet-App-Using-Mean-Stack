const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  status: String,
  plannedHours: Number,
  actualHours: Number,
});

const employeeSchema = new mongoose.Schema({
  name: String,
  performance: Number,
});

const Project = mongoose.model('Project', projectSchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = { Project, Employee };
