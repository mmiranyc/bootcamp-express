const express = require('express');
const productsRoute = require('./routes/productsRoute');
const usersRoute = require('./routes/usersRoute')

const app = express();

app.use(express.json());

app.use('/api', productsRoute);
app.use('/api', usersRoute);


app.listen(3000, () => console.log('rodando servidor! :)'));