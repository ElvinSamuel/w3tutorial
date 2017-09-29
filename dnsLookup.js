var dns = require('dns');

var w3 = dns.lookupService('127.0.0.1', 22, 
    function (err, hostname, service) {
        if (err) throw err;
        console.log(service);
});