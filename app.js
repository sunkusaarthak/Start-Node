var http = require('http');
var products = require('./data/products.json');
const { getProducts, getProduct } = require('./Controllers/productController')

const app = http.createServer(function(req, res) {
    if(req.url === "/api/products" && req.method === "GET") {
        getProducts(req, res);
    }
    else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getProduct(req, res, id);
    } else {
        res.writeHead(404, {'content-type' : 'application/json'});
        res.end(JSON.stringify({'message' : 'Route Not Found!'}))
    }
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{console.log(`Server Started Running on ${PORT}`)})
