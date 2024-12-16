const Timelog = require('../models/Timelog');

exports.createTimelog = async (req, res) => {
  try {
    const { date, project, task, hours, status } = req.body;
    const newTimelog = new Timelog({ date, project, task, hours, status });
    const savedTimelog = await newTimelog.save();
    res.status(201).json(savedTimelog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating timelog', error });
  }
};

exports.getTimelogs = async (req, res) => {
  try {
    const { filter } = req.query;
    let startDate = new Date();

    // Apply filter logic
    if (filter === 'day') {
      startDate.setHours(0, 0, 0, 0);
    } else if (filter === 'week') {
      startDate.setDate(startDate.getDate() - startDate.getDay());
    } else if (filter === 'month') {
      startDate.setDate(1);
    } else if (filter === 'year') {
      startDate.setMonth(0, 1);
    }

    const timelogs = await Timelog.find({ date: { $gte: startDate } });
    res.status(200).json(timelogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timelogs', error });
  }
};
