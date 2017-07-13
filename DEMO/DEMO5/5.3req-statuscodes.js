console.info('----http code----');
console.info();
var http=require('http');//引入http模块
var querystring=require('querystring');//引入querystring模块
//定义响应状态码数组
var status_codes=new Array();
status_codes[0]='201';
status_codes[1]='202';
status_codes[2]='203';
status_codes[3]='401';
status_codes[4]='404';
//定义查询字段
var postData=new Array();
for(var n=0;n<5;n++){
    postData[n]=status_codes[n];
}
//模似http客户端向http服务器连续发出request请求
for(var i=0;i<5;i++){
    var options={
        hostname:'localhost',
        port:6868,
        path:'/'+postData[i],
        header:{
            'Content-Type':'application/x-www-form-urlencoded',
            'content-length':postData.length
        }
    };
    var req=http.request(options,function(res){
        console.log('status_code:'+res.statusCode);
        console.log('headers:'+JSON.stringify(res.headers));
        console.info();
       // res.setEncoding('uft-8');
        res.on('data',function(chunk){
            console.log('body:'+chunk);
            console.info();
        });
    });
    req.on('error',function(e){
        console.log('problem with request:'+ e.message);
        console.info();
    });
    req.write('\n');
    req.end();
}