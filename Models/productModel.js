const { resolve } = require('path');
const products = require('../data/products.json');
const { rejects } = require('assert');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils');

function findAll() {
    return(new Promise((resolve, reject) => {
        resolve(products)
    }))
}

function findById(id) {
    return(new Promise((resolve, reject) => {
        const product = products.products.find((p) => p.id == id)
        resolve(product)
    }))
}

function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {id:uuidv4(), ...product}
        products.products.push(newProduct);
        writeDataToFile('./data/products.json', products);
        resolve(newProduct)
    });
}

module.exports = {
    findAll,
    findById,
    create
}