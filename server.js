const express = require('express');
const app = express();
 
app.get('/Lore', (req, res) => {
  res.send("Matias Fernando Munives");
});

app.get('/', (req, res) => {
  res.send("Lorena Fernanda Artaza");
});

const port = 3000;
 
app.listen(process.env.PORT || port);
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
