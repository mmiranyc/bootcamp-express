const productValidate = (req, res, next) => {
    const product = req.body;

    if(!product.name) return res.status(400).json('name is required')

    next();
}

module.exports = productValidate;