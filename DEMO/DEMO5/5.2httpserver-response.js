console.info('-------创建http服务器测试request-------');
console.info();
var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h3>这是node.js创建的 http服务器</h3>');
    res.end('创建HTTP服务器对客户请求的响应！');
}).listen(6868);