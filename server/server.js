'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const Translator = require('./Translator');
const port = process.env.PORT || 8080;

app.use(cors());

app.get('/translateNumber/:query', (req, res) => {
    const { query } = req.params;
    const resultInRomanNumeral = Translator.translateNumber(parseFloat(query));

    res.send({ query, result: resultInRomanNumeral}); 
  }
);

app.get('/translateRomanNumeral/:query', (req, res) => {
  const { query } = req.params;
  const resultInNumber = Translator.translateRomanNumeral(query);

  res.send({ query, result: resultInNumber}); 
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
