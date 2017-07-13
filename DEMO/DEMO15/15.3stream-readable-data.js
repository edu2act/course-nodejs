console.log('---------stream readable data-----------');
console.log();
var fs=require('fs');
var rs=fs.createReadStream('data/basic.txt');
//设置编码
rs.setEncoding('utf-8');
//流模块——readable处理函数
rs.on('readable',function(){
    console.log('readable event emitted.');
    console.info();
});
//流模块——data处理函数
rs.on('data',function(chunk){
    console.log('开始读取文本内容.......');
    console.info();
    console.log('读取文本%d字节数据...',chunk.length);
    console.info();
    console.log('文本内容:',chunk);
    console.info();
});