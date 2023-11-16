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
app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public', 'Asset')));
app.use(express.static(path.join(__dirname, 'public', 'Content')));
app.use(express.static(path.join(__dirname, 'public', 'Script')));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// Routes
const workoutRoutes = require('../routes/workouts');
const crudRoutes = require('../routes/crud');

app.use('/', workoutRoutes);
app.use('/', crudRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});