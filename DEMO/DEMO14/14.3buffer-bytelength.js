console.log('-----------buffer bytelength------------');
console.info();
str='\u00bd+\u00bc=\u00be';//定义字符串
//16进制编码：u00bc表示1/2，u00bc表示/4，u00be表示3/4
console.log(str+':'+str.length+'字符'+Buffer.byteLength(str,'utf-8')+'字节');
console.info();
console.log('-----------buffer bytelength- end-----------');
