const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT;

app.use(cors())
app.get('/', (req,res) => {
  res.end('Hello from backend')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
