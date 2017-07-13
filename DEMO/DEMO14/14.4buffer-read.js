console.log('--------buffer read-----------');
console.log();
var str_readuint8='';
var str_readint8='';
var str_readuint16le='';
var str_readint16le='';
var str_readuint16be='';
var str_readint16be='';
var buf=new Buffer(4);
buf[0]=0x6;
buf[1]=0x8;
buf[2]=0x23;
buf[3]=0x57;
//str_readuint8
str_readuint8+='buf.readuint8(i)is: ';
for(var i=0;i<buf.length;i++){
    str_readuint8+=buf.readUInt8(i).toString(16)+' ';
}
console.log(str_readuint8);
//str_readint8
str_readint8+='buf.readint8(i)is: ';
for(i=0;i<buf.length;i++){
    str_readint8+=buf.readInt8(i).toString(16)+' ';
}
console.log(str_readint8);
//str_readuint16le
str_readuint16le+='buf.readuint16le(i)is: ';
for(i=0;i<buf.length-1;i++){
   str_readuint16le+=buf.readUInt16LE(i).toString(16)+' ';
}
console.log(str_readuint16le);
//str_readint16le
str_readint16le+='buf.readint16le(i)is: ';
for(i=0;i<buf.length-1;i++){
    str_readint16le+=buf.readInt16LE(i).toString(16)+' ';
}
console.log(str_readint16le);
//str_readuint16be
str_readuint16be+='buf.readuint16be(i)is: ';
for(i=0;i<buf.length-1;i++){
    str_readuint16be+=buf.readUInt16BE(i).toString(16)+' ';
}
console.log(str_readuint16be);
//str_readint16be
str_readint16be+='buf.readint16be(i)is: ';
for(i=0;i<buf.length-1;i++){
    str_readint16be+=buf.readInt16BE(i).toString(16)+' ';
}
console.log(str_readint16be);
console.info();
console.info('buf.readuint32le(i)is: '+buf.readUInt32LE(0).toString(16));
console.info('buf.readuint32BE(i)is: '+buf.readUInt32BE(0).toString(16));
console.info('buf.readint32le(i)is: '+buf.readInt32LE(0).toString(16));
console.info('buf.readint32BE(i)is: '+buf.readInt32BE(0).toString(16));
console.log('--------buffer read  END-----------');