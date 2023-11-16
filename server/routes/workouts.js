const express = require('express');
const router = express.Router();
//route to workouts page
router.get('/workouts', (req, res) => {
  res.render('workouts', { title: 'Workout Tracker' });
});

module.exports = router;