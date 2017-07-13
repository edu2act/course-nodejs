var nam="我是var声明的name变量";
exports.name="我是exports下的属性name";
(function() {
    console.log("ok")
})();
function sayName(){
    console.log("我是function 声明的sayName()方法！");
}
exports.sayName1=function(){
    console.log("我是exports下的一个方法！");
};
exports.name2=name;
exports.sayName2=sayName;