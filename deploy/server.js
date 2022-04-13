const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const public = path.join(__dirname, '/../dist/verb-game');

app.use(express.static(public));

app.listen(port);