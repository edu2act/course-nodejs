console.info('-------buffer slice----------');
console.info();
//create a new buffer obj
var buf=new Buffer(26);
for(var i=0;i<26;i++){
    buf[i]=i+97;//97是ASCII码的a
}
var buf_slice_a=buf.slice(0,5);
console.info(buf_slice_a.toString('ascii',0,buf_slice_a.length));
for(var j=0;i<26;j++){
    buf[j]=122-j;//122是ASCII码的z
}
var buf_slice_b=buf.slice(0,5);
console.info(buf_slice_b.toString('ascii',0,buf_slice_b.length));
console.info('-------buffer slice----------');