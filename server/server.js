const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios')

const app = express();
const port = 3123;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../public')));


app.listen(port, () => {
    console.log('Listening to ' + port)
});