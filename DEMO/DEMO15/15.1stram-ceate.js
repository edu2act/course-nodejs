console.log('------------stream create read stream------------');
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
    console.log('data event emitted.');
    console.info();
});
//流模块——error处理函数
rs.on('error',function(){
    console.log('error event emitted.');
    console.info();
});
//流模块——end处理函数
rs.on('end',function(){
    console.log('end event emitted.');
    console.info();
});
//流模块——end处理函数
rs.on('close',function(){
    console.log('close event emitted.');
    console.info();
});