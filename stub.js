const express = require('express');
const app = express();
const port = 9001;

app.get('/', (req, res) => {
  console.log(req.headers);
  res.redirect('http://localhost:9002/receipt');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})