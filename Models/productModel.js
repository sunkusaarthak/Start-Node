const { resolve } = require('path')
const products = require('../data/products.json')
const { rejects } = require('assert')

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

module.exports = {
    findAll,
    findById
}