const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/projects', dashboardController.getProjects);
router.get('/employees', dashboardController.getEmployees);

module.exports = router;
