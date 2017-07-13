console.log('------------stream  readable read-----------');
console.info();
var fs=require('fs');
var rs=fs.createReadStream('data/basic.txt');
//设置编码
rs.setEncoding('utf-8');
//流模块——readable处理函数
rs.on('readable',function(){
    console.log('readable event emitted.');
    console.info();
    var chunk;
    while (null!==(chunk=rs.read())){
        console.log('读取文本%d字节数据...',chunk.length);
        console.log('文本内容:',chunk);
    }
});

//流模块——end处理函数
rs.on('end',function(){
    console.log('end event emitted.');
    console.info();
});