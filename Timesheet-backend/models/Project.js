const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  client: { type: String, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
  businessUnit: { type: String, required: true },
  type: { type: String, enum: ['Internal', 'External'], required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Project', projectSchema);
