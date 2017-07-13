console.info('----process kill---------');
console.info();
console.info('当前进程id:'+process.pid);
console.info();
process.on('SIGHUP',function(){
    console.log('got SIGHUP signal.')
});
setTimeout(function(){
    console.log('exiting......');
    process.exit(0);
    console.info('已经退出进程id:'+process.pid);
},1000);
//ubuntu环境测试kill
//process.kill(process.pid,'SIGHUP');
console.info('正在退出进程id:'+process.pid);
console.info();
console.info('----process kill---------');