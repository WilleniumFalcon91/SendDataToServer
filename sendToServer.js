const fs = require('fs');
const http = require('http');
const server = http.createServer( (request, response) => {
    console.log(request.url);
    let urlPath = 'index.html';
    if (request.url != '/') {
        urlPath = request.url.slice(1);
    }
    // let urlPath = request.url.slice(1);
    // fs.readFile('index.html', (err, buffer) => {
    fs.readFile(urlPath, (err, buffer) => {
        if (err) {
            response.end();
            return;
        }
        response.end(buffer.toString());
    });
});

server.listen(8887, () => {
    console.log("Here i am!");
});