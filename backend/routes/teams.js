const express = require('express');
const router = express.Router();
const axios = require('axios');

// fetch today's football games from an external API
router.get('/today', async (req, res) => {
  try {
    // replace with a real sports API URL and key
    const apiUrl = process.env.SPORTS_API_URL || 'https://api.example.com/football/today';
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to fetch teams' });
  }
});

module.exports = router;
