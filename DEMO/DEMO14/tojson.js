var buf = new Buffer('this is a buffer');
var json = buf.toJSON(buf);
console.log(json);
