# 题目1：下面的代码输出多少？修改代码让fnArr[i]()输出i。使用两种以上的方法
```
var fnArr = [];
for(var i = 0; i < 10; i++){
  fnArr[i] = function(){
    return i;
  };
}
console.log(fnArr[3]());
```



# 题目2：封装一个汽车对象，可以通过如下方式获取汽车状态
```
var Car = (function(){
  var speed = 0;
  function setSpeed(s){
    speed = s
  }
  ...
  return {
    setSpeed: setSpeed,
    ...
  }
})()
Car.setSpeed(30);
Car.getSpeed();  //30
Car.accelerate();
Car.getSpeed();  //40
Car.decelerate();
Car.decelerate();
Car.getSpeed();  //20
Car.getStatus();  //'running';
Car.decelerate();
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error
```



# 题目3：下面这段代码输出结果是？为什么？
```
var a = 1;
setTimeout(funtion(){
  a = 2;
  console.log(a);
},0);
var a;
console.log(a);
a = 3;
console.log(a);
```



# 题目4：下面这段代码输出结果是？为什么？
```
var flag = true;
setTimeout(functoin(){
  flag = false;
},0)
while(flag){}
console.log(flag);
```



# 题目5：下面这段代码输出？如何输出delayer: 0, delayer: 1...(使用闭包来实现)
```
for(var i = 0; i < 5; i++){
  setTimeout(function(){
    console.log('delayer:' + i);
  },0);
  console.log(i);
}
```



# 题目6：如何获取元素的真实宽高？



# 题目7：URL如何编码解码？为什么要编码？



# 题目8：补全如下函数，判断用户的浏览器类型
```
function isAndroid(){}
function isIphone(){}
function isIpad(){}
function isIos(){}
```
