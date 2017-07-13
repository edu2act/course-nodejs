var hello=require('./2-9singleobject');
var he=new hello();
he.setName('marico');
he.sayHello();
var he2=new hello();
he2.setName('yfc');
he2.sayHello();