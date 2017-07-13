var http=require('http');
var server=http.createServer();
//为服务器在接收客户端请求时触发的request事件绑定事件处理函数
server.on('connection',function(){
    console.log('hi1');
});
server.listen(2000);
console.log('服务器运行在2000端口');
//server.emit('conn');