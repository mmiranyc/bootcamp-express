const express = require('express');
const productValidate = require('../middlewares/productValidate')
const route = express.Router();

const products = require('../data');

route.get('/products', (req, res) => {
    res.status(200).json(products);
});

route.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));
    res.status(200).json(product);
});

route.post('/products', productValidate, (req, res) => {
    const fourProducts = req.body;
    products.push(fourProducts);
    res.status(201).json(products);
});

route.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const newArr = products.filter((product) => product.id !== Number(id))
    res.status(200).json(newArr);
});

route.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;

    const newProducts = products.map((product) => {
        if(product.id === Number(id)) return newProduct;
        return product;
    });
    res.status(201).json(newProducts);
});

module.exports = route;
