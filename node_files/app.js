const express = require('express');
const app = express();
import * as lets from './public/sort';

app.use(express.static('public'));

app.use('/static', express.static('public' + '/test_01.js'));

app.get('/programmers', (req, res) => {
  console.log(lets);
  res.send(func);
});

app.listen(3000, () => {
  console.log('Connected 3000 port!');
});