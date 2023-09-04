const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create an EPD data schema and model (replace with your actual schema)
const EPD = mongoose.model('EPD', {
  productName: String,
  description: String,
  // Add more fields as needed
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define an API endpoint to retrieve EPD data
app.get('/api/epd/:productId', async (req, res) => {
  try {
    // Retrieve EPD data by productId (you can use a different identifier)
    const productId = req.params.productId;
    const epdData = await EPD.findOne({ productId });

    if (!epdData) {
      return res.status(404).json({ error: 'EPD data not found' });
    }

    return res.json(epdData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Define deep linking routes (replace with actual routes)
app.get('/shop/:shopId/product/:productId', (req, res) => {
  const shopId = req.params.shopId;
  const productId = req.params.productId;

  // Here, you can implement logic to determine the appropriate EPD data for the shop and product
  // For demonstration purposes, we'll send a simple response
  res.json({ shopId, productId });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
