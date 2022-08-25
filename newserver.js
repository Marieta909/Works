const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Hello world');
});

server.listen(port, hostname, () => console.log(`server started at http://${hostname}:${port}/`));

