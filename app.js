var http = require('http');
var products = require('./data/products.json');

const app = http.createServer(function(req, res) {
    if(req.url === "/api/products" && req.method === "GET") {
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify(products));
    }
    else {
        res.writeHead(404, {'content-type' : 'application/json'});
        res.end(JSON.stringify({'message' : 'Route Not Found!'}))
    }
})

app.listen(PORT, ()=>{console.log("Server Started Running on ${PORT}")})
