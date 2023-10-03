const express = require('express');
const cors = require('cors');
const fs = require('fs');

// Create an express app
const app = express();

// Enable CORS
app.use(cors());

// Load jokes from JSON file
let jokes = JSON.parse(fs.readFileSync('jokes.json', 'utf8'));

// Create a route to get all jokes
app.get('/jokes', function (req, res) {
  res.send(jokes);
});

// Create a route to get a joke by id
app.get('/jokes/:id', function (req, res) {
  const joke = jokes.find(j => j.id === parseInt(req.params.id));
  if (!joke) return res.status(404).send('The joke with the given ID was not found.');
  res.send(joke);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});