console.info('----process stdin----------');
console.info();
console.info('用户输入数据');
//readable接受控制台用户输入事件
process.stdin.setEncoding('utf-8');
process.stdin.on('readable',function(){
    var chunk=process.stdin.read();
    if(chunk!==null){
        process.stdout.write('print data:'+chunk+'\n');
    }
});
//end 结束控制台输入事件
process.stdin.on('end',function(){
    process.stdout.write('end.\n');
});
console.info();
console.info('------process stdin end--------')