console.log('-------process chdir start---------');
console.log();
console.log('当前文件路径：'+process.cwd());
console.log('改变文件路径至/home/king');
process.chdir('home/king');
console.log('当前文件路径：'+process.cwd());
console.log();
console.log('-------process chdir end---------');