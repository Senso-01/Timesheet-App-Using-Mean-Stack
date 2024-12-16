const express = require('express');
const router = express.Router();
const { createTimelog, getTimelogs } = require('../controllers/timelogController');

router.post('/', createTimelog); // Add new timelog
router.get('/', getTimelogs);    // Get timelogs with filter

module.exports = router;
