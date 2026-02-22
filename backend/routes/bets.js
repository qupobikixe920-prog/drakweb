const express = require('express');
const router = express.Router();

// TODO: implement authentication middleware

// Place a bet (requires user, balance check etc.)
router.post('/', (req, res) => {
  // payload: { userId, teamId, amount }
  res.json({ message: 'bet placed (stub)' });
});

// get bets for a user
router.get('/:userId', (req, res) => {
  res.json({ bets: [] });
});

module.exports = router;
