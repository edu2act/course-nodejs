function print_pic(){
    //等腰三角形
    var a, b, c,space='',res='',ok;
    c=10;
    for(var i=1;i<=c;i++){
        for(a=1;a<=c-i;a++){
            space+=' ';
        }
        for(b=1;b<=2*i-1;b++){
            res+='*';
        }
        console.log(space+res);
        space='';
        res='';
    }
    for(i=1;i<=c;i++){
        for(a=1;a<=i;a++){
            space+=' ';
        }
        for(b=1;b<=(2*(c-1)-1)-2*(i-1);b++){
            res+='*';
        }
        console.log(space+res);
        space='';
        res='';
    }
     return true;
}
exports.pic=print_pic;