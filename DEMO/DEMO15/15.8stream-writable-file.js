console.log('------------stream writable file-----------');
console.info();
var fs=require('fs');
var ws=fs.createWriteStream('data/unpipe2.txt');
ws.write('stream-');
ws.write('writable-');
ws.write('file-');
setTimeout(function(){
    ws.end('end.\n');
},1000);