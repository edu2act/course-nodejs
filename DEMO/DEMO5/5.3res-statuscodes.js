console.info('------http status code-------');
console.info();
var http=require('http');//引用http模块
console.log('now start http server');
console.info();
http.createServer(function(req,res){
    //获取URL查询字段
    var status=req.url.substr(1);
    //获取响应状态码
    var status_codes=status.substring(12);
    //验证响应状态码集合是否有效
    if(!http.STATUS_CODES[status_codes]){
        status_codes='404';
    }
    //写http文件头
    res.writeHeader(status_codes,{'content-type':'text/plain;charset=utf-8'});
    //发送响应状态码，并通知服务器消息完成
    res.end(http.STATUS_CODES[status_codes]);
}).listen(6868);