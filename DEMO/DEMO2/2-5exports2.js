var test=require('./2-5exports1');
console.log(test);
console.log(module.exports === this);
console.log(module.exports === exports);
console.log(this === exports);