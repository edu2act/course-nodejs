//回调函数
function a(callbackFunction){
    console.log("这是函数a");
    return callbackFunction(3,2);
}
function b(m,n){
    console.log("这是回调函数b");
    return m+n;
}
(function(){
    var result = a(b);
    console.log("result = "+ result);
})();
