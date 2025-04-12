const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let jobs = [];

app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/jobs', (req, res) => {
  const job = req.body;
  jobs.push(job);
  res.status(201).json({ message: 'Job added successfully', job });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
