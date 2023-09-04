const mongoose = require('mongoose');

const epdSchema = new mongoose.Schema({
  productName: String,
  description: String,
  // Add more fields as needed
});

const EPD = mongoose.model('EPD', epdSchema);

module.exports = EPD;