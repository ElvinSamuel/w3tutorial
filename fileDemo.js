var http   = require('http');
var fs     = require('fs');

const server = http.createServer(function (req, res) {
                fs.readFile('demofile1.html', function(err, data){
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                });
            })
            
server.listen(process.env.PORT, function(){
    console.log(`We in. On ${process.env.PORT}`);
});