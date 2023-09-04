const express = require('express');
const router = express.Router();
const EPD = require('../models/EPD');

// Get all EPD data
router.get('/epd', async (req, res) => {
  try {
    const epdData = await EPD.find();
    res.json(epdData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add routes for creating, updating, and deleting EPD data as needed

module.exports = router;