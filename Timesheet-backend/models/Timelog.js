const mongoose = require('mongoose');

const TimelogSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  project: { type: String, required: true },
  task: { type: String, required: true },
  hours: { type: Number, required: true },
  status: { type: String, enum: ['completed', 'in-progress'], required: true },
});

module.exports = mongoose.model('Timelog', TimelogSchema);
