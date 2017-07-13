console.info('------http client write header------');
console.info();
var http=require('http');
//定义服务器字段
var options={
    port:6868,
    hostname:'localhost',
    path:'/',
    method:'post'
};
//由客户端向http服务器发起请求
var req=http.request(options,function(res){
    console.log('status:'+res.statusCode);
    console.log('header:'+JSON.stringify(res.headers));
    //res.setEncoding(utf-8);
    res.on('data',function(chunk){
        console.log('body:'+chunk);
    });
});
//监听request对象的error事件
req.on('error',function(e){
    console.log('problem with request:'+ e.message);
});
req.write('data\n');
req.end();
