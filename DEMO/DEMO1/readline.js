//进程
function readline(){
    console.log('Node.js readline.write()');
    var readline=require('readline');
    var rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    rl.setPrompt('NodeJS>');
    rl.prompt();
    rl.on('line',function(line){
        switch(line.trim()){
            case 'name':console.log('king!');break;
            case 'code':console.log('Node.js!');break;
            case 'time':console.log('2017!');break;
            default:console.log('say what?i might have heard'+line.trim());break;
        }
        rl.prompt();
    }).on('close',function(){
        console.log('have a good day!');
        process.exit(0);
    });
}
readline();