console.log('------------stream writable file-----------');
console.info();
var fs=require('fs');
var rs=fs.createReadStream('data/unpipe1.txt');
var ws=fs.createWriteStream('data/unpipe2.txt');
//设置编码
rs.setEncoding('utf-8');
//流模块——data处理函数
rs.on('data',function(chunk){
    console.log('data event emitted');
    //通过ws.file()方法返回值判断，数据是已经写入目标，还是仅仅写入缓存中
    if(ws.write(chunk)===false){
        console.log('数据写入缓存');
        rs.pause();
    }
});
ws.on('drain',function(){
    console.log('drain event emitted');
    rs.resume();
});
rs.on('end',function(){
    console.log('end event emitted');
    ws.end();
});