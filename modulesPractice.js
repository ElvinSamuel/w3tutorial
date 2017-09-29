const http = require('http'),
    dt = require('./modulesPractice_export.js');
    
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
});

server.listen(process.env.PORT, function(){
    console.log(`ModulesPractice Server Listening On [${process.env.PORT}]`);
});