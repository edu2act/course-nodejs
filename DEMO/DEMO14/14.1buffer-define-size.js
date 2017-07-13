//定义并初始化buffer对象
var buffer=new Buffer('this is buffer','utf-8');
console.log('可变缓冲区buffer的长度是：'+buffer.length);
console.log('可变缓冲区buffer是：'+buffer);
////定义并初始化buffer16对象
var buffer16=new Buffer(16);
console.log('可变缓冲区buffer16的长度是：'+buffer16.length);
console.log('可变缓冲区buffer16是：'+buffer16);
buffer16.write('this is buffer',0,'utf-8');
console.log('可变缓冲区buffer16的长度是：'+buffer16.length);
console.log('可变缓冲区buffer16是：'+buffer16);