// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
console.log('程序开始：');
// 注册事件
eventEmitter.addListener('e_add', function(){
    console.log('触发了e_add事件！');
});
eventEmitter.on('e_on', function(){
    console.log('触发了e_on事件！');
});
// 发射事件
eventEmitter.emit('e_add');
eventEmitter.emit('e_on');
console.log("程序执行完毕。");