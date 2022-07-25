const express = require('express');
const productsRoute = require('./routes/productsRoute');

const app = express();

app.use(express.json());

app.use('/api', productsRoute);


app.listen(3000, () => console.log('rodando servidor! :)'));