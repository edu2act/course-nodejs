console.log('------------stream readable pipe-----------');
console.info();
var fs=require('fs');
var readable=fs.createReadStream('data/basic.txt');
var writable=fs.createWriteStream('data/write.txt');
readable.pipe(writable);