console.info('-----http server write header-----');
console.info();
var http=require('http');
console.log('now start http server');
console.info();
http.createServer(function(req,res){
    var body='write header';
    res.writeHead(200,{
        'content-length':body.length,
        'content-type':'text/plain'
    });
    res.write('node.js');
    res.write('HTTP');
    res.end();
}).listen(6868)
