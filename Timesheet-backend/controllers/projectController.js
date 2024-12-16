const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find().populate('users');
  res.json(projects);
};

exports.createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findByIdAndUpdate(id, req.body, { new: true });
  res.json(project);
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.status(204).send();
};

exports.assignUsers = async (req, res) => {
  const { id } = req.params;
  const { userIds } = req.body;
  const project = await Project.findByIdAndUpdate(id, { users: userIds }, { new: true });
  res.json(project);
};
