const express = require('express');
const colors = require('colors');

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`.green.underline);
});
