const express = require('express');
const router = express.Router();

router.get('/workouts', (req, res) => {
  res.render('workouts', { title: 'Workout Tracker' });
});

module.exports = router;