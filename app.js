const express = require('express');
const products = require('./data');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
    res.status(200).json(products);
});

app.post('/products', (req, res) => {
    const fourProducts = req.body;
    products.push(fourProducts);
    res.status(201).json(products);
});

app.delete('/products', (req, res) => {
    const rmvProduct = req.body;
    const newArr = products.filter((product) => product.id !== rmvProduct.id)
    res.status(200).json(newArr);
});

app.put('/products', (req, res) => {
    const newProduct = req.body;
    const newProducts = products.map((product) => {
        if(product.id === id) return newProduct;
        return product;
    });
    res.status(201).json(newProducts);
});

app.listen(3000, () => console.log('rodando servidor! :)'));