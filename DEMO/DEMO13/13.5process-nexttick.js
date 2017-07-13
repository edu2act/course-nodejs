console.info('-------process next tick---------');
console.info();
//使用setTimeout()方法执行异步操作
console.time('startB');//console.time()计时器B
console.log('start set timeout');
setTimeout(function(){
    console.log('nextTick callback 2');
},0);
console.log('scheduled-setTimeout');
console.timeEnd('startB');//console.time()计时器B
//使用process.nextTick()方法执行异步操作
console.time('startA');//console.time()计时器A
console.log('start-next tick');
//process.nextTick()方法
process.nextTick(function(){
    console.log('nextTick call back 1');
});
console.log('scheduled-nextTick');
console.timeEnd('startA');//console.time()计时器A
console.info();
console.info('-------process next tick---------');