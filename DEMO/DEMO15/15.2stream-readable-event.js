console.info('--------stream readable event---------');
console.info();
var fs=require('fs');
var rs=fs.createReadStream('data/basic.txt');
rs.on('readable',function(){
    console.log('readable event emitted.');
    console.info();
});