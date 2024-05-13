
const express = require('express');
const os = require('os');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
    const replicaId = process.env.HOSTNAME || 'Unknown';
    res.send(`Replica do service ${replicaId}`);
    next();
  });
  

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
