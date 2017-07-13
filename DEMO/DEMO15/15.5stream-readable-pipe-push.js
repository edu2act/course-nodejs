console.log('----------stream readable pipe push-----------');
console.info();
var stream=require('stream');
var rs=new stream.Readable;//定义readable对象
//使用push方法发送数据
rs.push('stream');
rs.push('readable');
rs.push('push()');
rs.push('pipe()');
rs.push('\n');
rs.push(null);
//使用pipe方法导出数据
rs.pipe(process.stdout);
//可读流在没有读取之前，会缓存所有压入的数据