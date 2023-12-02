// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/hotels', (req, res) => {
  const hotelData = require('./hotel_data.json');
  res.json(hotelData);
});

app.post('/hotels', (req, res) => {
  const updatedData = req.body;

  // Update the local JSON file with the modified data
  fs.writeFile('./hotel_data.json', JSON.stringify(updatedData, null, 2), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      res.send('Data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
