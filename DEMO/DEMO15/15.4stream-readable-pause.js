console.log('--------stream pause() & resume()---------');
console.info();
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
    console.log('读取文本%d字节数据...',chunk.length);
    rs.pause();//暂停一个可读（readable）流
    console.log('接下来的3秒不会有数据...');
    setTimeout(function(){
        console.log('现在数据开始流动...');
        rs.resume();//恢复一个可读（readable）流
        console.log('文本内容:',chunk);
    },3000);
});