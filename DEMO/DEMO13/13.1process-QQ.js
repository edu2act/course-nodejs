var cmd=process.platform=='win32'?'tasklist':'ps aux';
var exec = require('child_process').exec;
var name='qq';
exec(cmd, function(err, stdout, stderr) {
    if(err){ return console.log(err); }
    stdout.split('\ n').filter(function(line){
        var p=line.trim().split(/\s+/),pname=p[0],pid=p[1];
        if(pname.toLowerCase().indexOf(name)>=0 && parseInt(pid)){
            console.log(pname,pid);
        }
    });
});