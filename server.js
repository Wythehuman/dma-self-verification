
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const DATA_FILE = './data/certificates.json';
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'Kenn00078';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET admin login page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin/login.html'));
});

// POST login
app.post('/admin', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.sendFile(path.join(__dirname, 'public/admin/panel.html'));
  } else {
    res.send('Login failed');
  }
});

// Add certificate
app.post('/admin/add', (req, res) => {
  const { name, nrc, certNo, certType } = req.body;
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.push({ name, nrc, certNo, certType });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.send('Certificate added! <a href="/admin">Back</a>');
});

// Verify certificate
app.get('/api/verify', (req, res) => {
  const { name, nrc, certType } = req.query;
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const found = data.find(
    cert => cert.name === name && cert.nrc === nrc && cert.certType === certType
  );
  res.json({ found: !!found, certNo: found ? found.certNo : null });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
