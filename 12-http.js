const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.end('Welcome to home page');
    }
    if(req.url === '/about') {
        res.end('Here is our history!');
    }
    res.end(`
        <h1>Oops!</h1>
        <p> Cannot find page user is looking for</p>
        <a href="/">Back Home</a>
    `)
})

server.listen(5000);