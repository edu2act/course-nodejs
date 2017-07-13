// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
console.log('程序开始：');
// 注册事件
eventEmitter.on('e_on', function(obj){
    console.log(obj+'触发了e_on事件！');
});
// 发射事件
eventEmitter.emit('e_on','emit');
console.log("程序执行完毕。");