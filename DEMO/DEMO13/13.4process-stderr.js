console.info('----process stderr-----------');
console.info();
var fs=require('fs');
var file='err.txt';
var encoding='UTF-8';
fs.readFile(file,encoding,function(err,data){
    if(err){
        setTimeout(function(){
            process.stderr.write('err:'+err+'\n');
        },1000);
    }else{
        console.log(data);
    }
});
console.info('----process stderr-----------');