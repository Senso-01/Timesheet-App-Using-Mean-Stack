const mongoose = require('mongoose');
const Project = require('./Project');

// Define the Task Schema
const taskSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true // Removes extra whitespace 
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  plannedHours: { 
    type: Number, 
    required: true, 
    min: 0 // Ensures no negative hours
  },
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Completed'], // Restrict allowed values
    default: 'Pending', // Default status
    required: true 
  },
  project: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project', // Reference to Project model
    required: true 
  },
}, { 
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the Task model
module.exports = mongoose.model('Task', taskSchema);
