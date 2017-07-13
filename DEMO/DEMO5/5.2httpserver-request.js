console.info('----创建http客户端-----');
console.info();
var http=require('http');
var options={
    hostname:'localhost',
    port:6868,
    path:'/',
    method:'post'
};
var req=http.request(options,function(res){
    console.log('status:'+res.statusCode);
    res.setEncoding('UTF-8');
    res.on('data',function(chunk){
        console.log('body:'+chunk);
    });
});
req.on('error',function(e){
    console.log('problem with request:'+ e.message);
});
req.end();