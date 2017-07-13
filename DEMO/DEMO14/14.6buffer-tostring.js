console.log('-----------buffer to string--------------');
console.info();
//define a buffer obj
buf=new Buffer(26);
//int a buffer obj
for(var i= 0;i<26;i++){
    buf[i]=i+97;//97是ASCII码的a
}
//输出：abcdefghijklmnopqrstuvwxyz
console.log('buf.toString(ascii): '+buf.toString('ascii'));
console.info();
//输出abcde
console.log('buf.toString(ascii,0,5): '+buf.toString('ascii',0,5));
console.info();
//输出abcdefgh
console.log('buf.toString(utf-8,0,8): '+buf.toString('utf-8',0,8));
console.info();
//16进制输出abcde
console.log('buf.toString(utf-8,0,8): '+buf.toString('hex',0,12));
console.info();
//utf-8输出abcdefghijklmnopqr
console.log('buf.toString(undefined,0,8): '+buf.toString(undefined,0,18));
console.info();
console.log('-----------buffer to string--------------');