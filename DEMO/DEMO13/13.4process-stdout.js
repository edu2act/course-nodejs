console.log('---------process stdout---------');
console.log('node.js process module-stdout method');
process.stdout.write('node.js process module-stdout method');
console.info('\n');
console.log('console.log()方法封装了porcess.stdout.write()方法');
console.log=function(d){
    process.stdout.write('process.stdout.write'+d+'\n');
};
console.log('node.js process module-stdout method');
console.info();
console.info('---------process stdout---------');