const express = require('express');
const mongoose = require('mongoose');
const config = require('./db'); 
const path = require('path'); 
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect(config.dbUri);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set up static files and views
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../public', 'css')));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// Routes
const indexRouter = require('../routes/index');
const workoutRoutes = require('../routes/workouts');
const crudRoutes = require('../routes/crud');
app.use('/', indexRouter);
app.use('/', workoutRoutes);
app.use('/', crudRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});