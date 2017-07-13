var express = require('express');
var router = express.Router();
var User = require('../modules/user.js');
var Post = require('../modules/post.js');

var path=require('path');
var formidable = require('formidable');
var fs = require('fs');
var AVATAR_UPLOAD_FOLDER = '/upload/';
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: '主页',user: req.session.user.name,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString()});
});
router.get('/index', function (req, res) {
    res.render('index', {title: '主页',user: req.session.user.name,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString()});
});
router.get('/reg', function (req, res) {
    res.render('reg', {title: '重新注册',user: req.session.user.name,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString()});
});
router.get('/reg1', function(req, res, next) {
    res.render('reg1', {title:'注册',user: req.session.user.name,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString() });
});
router.post('/reg1', function (req, res) {
        var name = req.body.name;
        var password = req.body.password;
        var password_re = req.body['password2'];
        //检验用户两次输入的密码是否一致
        if (password_re != password) {
            req.flash('error', '两次输入的密码不一致!');
            return res.redirect('/reg');//返回注册页
        }
        //生成密码的 md5 值
        // var md5 = crypto.createHash('md5');
        // password = md5.update(req.body.password).digest('hex');
        var newUser = new User({
            name: name,
            password: password,
            email: req.body.email
        });
        //检查用户名是否已经存在
        User.get(newUser.name, function (err,user) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            if (user) {
                req.flash('error', '用户已存在!');
                return res.redirect('/reg');//返回注册页
            }
            //如果不存在则新增用户
            newUser.save(function (err,user) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/reg');//注册失败返回主册页
                }
                req.session.user = newUser;//用户信息存入 session
                req.session.name=newUser.name;
                req.flash('success', '注册成功!');
                res.redirect('/reg1');
            });
        });
});
router.get('/reg2', function(req, res, next) {
    res.render('reg2', {title:'注册',user: req.session.user.name,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString() });
});
router.get('/reg3', function(req, res, next) {
    res.render('reg3', {title:'注册',user: req.session.user.name,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString() });
});
router.post('/reg3', function(req, res, next) {
    res.render('reg3', {title:'注册',user: req.session.user.name,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString() });
});
router.get('/reg4', function(req, res, next) {
    res.render('reg4', {title:'注册',imgpath: req.session.img,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString() });
});
router.post('/reg4', function(req, res) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';		//设置编辑
    form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;	 //设置上传目录
    form.keepExtensions = true;	 //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    form.parse(req, function(err, fields, files) {
        if (err) {
            res.locals.error = err;
            res.render('reg3', { title:'上传图片'  });
            return;
        }
        var extName = '';  //后缀名
        switch (files.fulAvatar.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            res.locals.error = '只支持png和jpg格式图片';
            res.render('reg3', { title: '上传图片'  });
            return;
        }
        var avatarName = Math.random() + '.' + extName;
        var newPath = form.uploadDir + avatarName;
        //console.log(newPath);
        fs.renameSync(files.fulAvatar.path, newPath);  //重命名
        var mypath=newPath.replace('public/','');
        req.session.img = mypath;
        res.render('reg4', { title: '上传图片',imgpath:req.session.img});
    });
    //res.locals.success = '上传成功';
    // res.render('up', { title: '上传图片' });
});
router.post('/', function (req, res) {
    //生成密码的 md5 值
    //var md5 = crypto.createHash('md5'),
    //   password = md5.update(req.body.password).digest('hex');
    //检查用户是否存在
    var password=req.body.password;
    User.get(req.body.name, function (err, user) {
        if (!user) {
            req.flash('error', '用户不存在!');
            return res.redirect('/');//用户不存在则跳转到登录页
        }
        //检查密码是否一致
        if (user.password != password) {
            req.flash('error', '密码错误!');
            return res.redirect('/');//密码错误则跳转到登录页
        }
        //用户名密码都匹配后，将用户信息存入 session
        req.session.user = user;
        req.flash('success', '登陆成功!');
        res.redirect('/blog');//登陆成功后跳转到主页
    });
});

router.get('/blog', function (req, res) {
    Post.get(null, function (err, posts) {
        if (err) {
            posts = [];
        }
        res.render('blog', {
            title: '我的微博',
            user: req.session.user.name,
            imgpath:req.session.img,
            posts: posts,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });
});
router.post('/blog', function (req, res) {
    var currentUser = req.session.user,
        post = new Post(currentUser.name, null, req.body.post);
    post.save(function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/blog');
        }
        req.flash('success', '发布成功!');
        res.redirect('/blog');//发表成功跳转到主页
    });
});
router.get('/notice', function(req, res, next) {
    res.render('notice', {title:'注册',user: req.session.user.name,imgpath:req.session.img,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString() });
});
router.get('/letter', function(req, res, next) {
    res.render('letter', {title:'注册',user: req.session.user.name,imgpath:req.session.img,success: req.flash('注册成功').toString(),
        error: req.flash('error').toString() });
});
router.get('/logout', function(req, res, next) {
    req.session.user = "";
    req.flash('success', '登出成功!');
    res.redirect('/');//登出成功后跳转到主页
});
module.exports = router;
