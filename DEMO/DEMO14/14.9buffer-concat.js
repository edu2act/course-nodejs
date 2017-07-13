console.info('--------buffer concat vs string concat------');
console.info();
var buf=new Buffer('this is buffer concat test!');
var str="this is string concat test!";
console.time('buffer concat test!');
var list=[];
var len=100000+buf.length;
for(var i=0;i<100000;i++){
    list.push(buf);
    len+=buf.length;
}
//buffer对象拼接
var s1=Buffer.concat(list,len).toString();
console.timeEnd('buffer concat test!');
console.time('string concat test!');
list=[];
for( i=100000;i>=0;i--){
    list.push(str);
}
var s2=list.join('');
console.timeEnd('string concat test!');
console.info();
console.info('--------buffer concat vs string concat------');