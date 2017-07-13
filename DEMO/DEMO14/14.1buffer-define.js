//定义并初始化buffer16对象
var buffer16=new Buffer([0x6e,0x6f,0x64,0x65,0x6a,0x73]);//数组形式
console.log('可变缓冲区buffer16的长度是：'+buffer16.length+'.');
console.log('可变缓冲区buffer16是：'+buffer16+'.');
//使用数组下标形式读取buffer对象
for(var i=0;i<buffer16.length;i++){
    console.log('buffer16['+i+']是：'+buffer16[i]);
    console.log('buffer16['+i+'].toString 是：'+buffer16[i].toString());
}
//定义并初始化buffer8对象
var buffer8=new Buffer('nodejs','utf-8');//数组形式
console.log('可变缓冲区buffer8的长度是：'+buffer8.length+'.');
console.log('可变缓冲区buffer8是：'+buffer8+'.');
//使用数组下标形式读取buffer对象
for(var i=0;i<buffer16.length;i++){
    console.log('buffer8['+i+']是：'+buffer8[i]);
    console.log('buffer8['+i+'].toString 是：'+buffer8[i].toString());
}
console.log(buffer8.toString('utf-8'));
console.log(buffer8.toString('hex'));