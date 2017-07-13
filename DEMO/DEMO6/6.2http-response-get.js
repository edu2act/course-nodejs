console.info('------http server get-------');
console.info();
var http=require('http');
var url=require('url');
var qs=require('querystring');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    var query=url.parse(req.url).query;
    console.info(query);
    console.info();
    var qs_parse=qs.parse(query);
    console.info(qs_parse);
    console.info();
    res.end(JSON.stringify(qs_parse));
}).listen(6868);