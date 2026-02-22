const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// route files
const betsRoute = require('./routes/bets');
const depositRoute = require('./routes/deposit');
const teamsRoute = require('./routes/teams');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// static uploads
app.use('/uploads', express.static('uploads'));

// connect to MongoDB (configure your URI in env variable)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/drakweb';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error', err));

// mount routes
app.use('/api/bets', betsRoute);
app.use('/api/deposit', depositRoute);
app.use('/api/teams', teamsRoute);

// catch-all 404 for unknown API routes
app.use((req, res) => {
  res.status(404).json({
    error: 'NOT_FOUND',
    message: 'The requested resource was not found',
    path: req.originalUrl,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
