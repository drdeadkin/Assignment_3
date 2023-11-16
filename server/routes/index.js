
const express = require('express');
const router = express.Router();
//route to homepage (index)
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;