// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
console.log('程序开始：');
// 注册事件
eventEmitter.on('hello1', function(){
    console.log('触发了hello1事件！');
});
eventEmitter.once('hello2', function(){
    console.log('触发了hello2事件！');
});
// 发射事件
eventEmitter.emit('hello1');
eventEmitter.emit('hello1');
eventEmitter.emit('hello2');//只能触发一次
eventEmitter.emit('hello2');
console.log("程序执行完毕。");