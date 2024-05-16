const { create } = require('domain');
const Products = require('../Models/productModel');

// @desc Gets All Products
// @route GET api/products
async function getProducts(req, res) {
    try {
        const products = await Products.findAll();

        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify(products));
    } catch(error) {
        console.log(error);
    }
}

// @desc Gets Single Products
// @route GET api/product/:id
async function getProduct(req, res, id) {
    try {
        const product = await Products.findById(id);

        if(product) {
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify(product));
        }
        else {
            res.writeHead(404, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify({ message: 'Product Not Found' }));
        }
    } catch(error) {
        console.log(error);
    }
}

// @desc Create a Product
// @route POST api/product/
async function createProduct(req, res) {
    try {

    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}