console.log('------------stream readable unpipe-----------');
console.info();
var fs=require('fs');
var readable=fs.createReadStream('data/unpipe1.txt');
var writable=fs.createWriteStream('data/unpipe2.txt');
readable.pipe(writable);
setTimeout(function(){
    console.log('停止写入到data/unpipe2.txt');
    readable.unpipe(writable);
    console.log('自行关闭文件流');
    writable.end();
},1);
