const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config()
const app = express();
const port = process.env.PORT;
const service = `${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`;

app.use(cors())

app.get('/', (req,res) => {
  res.end('Hello from backend')
})

app.get('/service', async (req, res) => {
  const response = await axios.get(service);
  res.end(response.data);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
