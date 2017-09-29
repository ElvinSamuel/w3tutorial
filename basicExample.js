var http = require('http');

// Use The Accent Mark (NOT Double or Single Quotes) With Dollar Sign ( `${}` ) To Include Variables In Strings 

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
}).listen(process.env.PORT, function(){
    console.log(`Listening On Port ${process.env.PORT}`);
});