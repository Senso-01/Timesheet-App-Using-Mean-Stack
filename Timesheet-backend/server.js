const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes')
const timelogRoutes = require('./routes/timelogRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const cors = require('cors');
const User = require('./models/User');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200', // Adjust this URL to match the Angular frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const isValidPassword = async (inputPassword, storedPassword) => {
  try {
    const match = await bcrypt.compare(inputPassword, storedPassword);
    return match;
  } catch (error) {
    console.error('Error during password comparison:', error);
    return false;
  }
};

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/timelogs', timelogRoutes);
app.use('/api/dashboard', dashboardRoutes);




// Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});