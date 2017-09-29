const http = require('http'),
      upperCase   = require('upper-case');

http.createServer(function(req, res) {
    res.writeHead(200, {'Contenct-Type': 'type/html'});
    res.write(upperCase("Hello World!"));
    res.end();
}).listen(process.env.PORT, function(){
    console.log(`Listening On ${process.env.PORT}`);
});