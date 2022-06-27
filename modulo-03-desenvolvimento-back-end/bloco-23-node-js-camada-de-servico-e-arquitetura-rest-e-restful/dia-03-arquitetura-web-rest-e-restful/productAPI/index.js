require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productRoute = require('./routes/productRoute');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
