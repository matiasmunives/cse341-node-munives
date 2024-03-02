const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');
 
app.get('/', lesson1Controller.matiasRoute);

app.get('/Lore', lesson1Controller.loreRoute);

const port = 3000;
 
app.listen(process.env.PORT || port);
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
