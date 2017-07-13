// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
console.log('程序开始：');
// 注册事件
eventEmitter.on('listener1', function(){
    console.log('触发了listener1事件！');
});
eventEmitter.on('listener2', function(){
    console.log('触发了listener2事件！');
});

eventEmitter.removeListener('listener2',function(){
    console.log('移除了listener2事件')
});
// 发射listener事件
eventEmitter.emit('listener1');
eventEmitter.emit('listener2');

console.log("程序执行完毕。");