console.info('------http client get------');
console.info();
var http=require('http');
//发送get请求
http.get('http;//localhost:6868/signature=12345678&echostr=787878&timestamp=168',function(res){
    console.log('status:'+res.statusCode);//打印响应状态码
    console.info();
    //res.setEncoding('UTF-8');
    //监听data事件处理函数
    res.on('data',function(chunk){
        console.log('body:'+chunk);//打印服务器回写内容
        console.info();
    });
    console.info();
    }).on('error',function(e){
        console.info('got error:'+ e.message);//打印输出error信息
        console.info();
})