var http = require('http');
http.createServer(function(req,res){
    var status = req.url.substr(1);
    if( ! http.STATUS_CODES[status])
    {
        status = '404';
    }
    res.writeHeader(status,{'Content-Type':'text/plain'});
    res.end(http.STATUS_CODES[status]);
}).listen(3000);
//结果输出: Internal Server Error