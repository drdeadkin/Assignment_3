const express = require('express');
const router = express.Router();

// Create
router.post('/', (req, res) => {
  // Implementation for creating a new item
  res.send('Create operation');
});

// Read
router.get('/', (req, res) => {
  // Implementation for retrieving items
  res.send('Read operation');
});

// Update
router.put('/:id', (req, res) => {
  // Implementation for updating an item by ID
  const itemId = req.params.id;
  res.send(`Update operation for item with ID ${itemId}`);
});

// Delete
router.delete('/:id', (req, res) => {
  // Implementation for deleting an item by ID
  const itemId = req.params.id;
  res.send(`Delete operation for item with ID ${itemId}`);
});

module.exports = router;
