console.log('--------buffter.isbuffer;----------');
console.log();
var buffer=new Buffer('nodejs','utf-8');
if(Buffer.isBuffer(buffer)){
    console.log('the buffer is a buffer obj');
}else{
    console.log('the buffer is not a buffer obj');
}
var str='nodejs';
if(Buffer.isBuffer(str)){
    console.log('the buffer is a buffer obj');
}else{
    console.log('the buffer is not a buffer obj');
}
console.log();
console.log('---------------end-------------------')