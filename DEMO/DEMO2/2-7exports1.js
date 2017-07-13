//exports = function(r) { return r * r * Math.PI;};
module.exports=function(r) { return r * r * Math.PI;};
console.log(module.exports === this);
console.log(module.exports === exports);
console.log(this === exports);
console.log(this);