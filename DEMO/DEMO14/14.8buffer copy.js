console.info('---------buffer copy------------');
console.info();
buf1=new Buffer(26);
buf2=new Buffer(26);
for(var i=0;i<26;i++){
    buf1[i]=i+97;//97是ascII码的a
    buf2[i]=35;//35是ASCII码的#
}
buf1.copy(buf2,6,0,10);
console.info(buf2.toString('ascii',0,25));
buf=new Buffer(26);
for(i=0;i<26;i++){
    buf[i]=i+97;//97是ascII码的a
}
console.log(buf.toString());
buf.copy(buf,0,6,10);
console.log(buf.toString());
console.info('---------buffer copy------------');