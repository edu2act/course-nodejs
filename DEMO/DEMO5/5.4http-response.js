console.info('-----http create basic server------');
console.info();
var http=require('http');
//创建服务器
http.createServer(function(req,res){
    //设定文件头
    res.setHeader('content-type','text/html');
    res.setHeader('set-cookie',['type=king','language=javascript']);
    //获取文件头
    var content_type=res.getHeader('content-type');
    console.info(content_type);
    var set_cookie=res.getHeader('set-cookie');
    console.info(set_cookie);
    //写页面内容
    res.write('<h3>node.js_____http</h3>');
    res.write('<p>'+content_type+'</p>');
    res.write('<p>'+set_cookie+'</p>');
    res.end();
}).listen(6868);