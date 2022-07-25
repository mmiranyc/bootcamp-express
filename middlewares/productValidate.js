const products = require("../data");

const productValidate = (req, res, next) => {
    const product = req.body;

    if(product.name.length < 2) return res.status(400).json('name must be gratter than 2')

    next();
}

module.exports = productValidate;