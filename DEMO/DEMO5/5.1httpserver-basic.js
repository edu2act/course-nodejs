console.info('----http server-----');
console.info();
var http=require('http');
//createServer()方法创建服务器
http.createServer(function(req,res){
    //writeHead()方法写http文件头
    res.writeHead(200,{'Content-type':'text/html'});
    //write()方法写页面内容
    res.write('<h3>node.js http server</h3>');
    //end()方法发送响应状态码，并通知服务器消息完成
    res.end('<p>create basic http server</p>');
}).listen(6868);//监听6868端口号