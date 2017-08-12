# 1、下面的代码输出多少？修改代码让```fnArr[i]()```输出i。使用两种以上的方法。
```
var fnArr = [];
for(var i = 0; i < 10; i++){
  fnArr[i] = function(){
    return i;
  };
}
console.log(fnArr[3]());
```

输出：10
修改：
```
var fnArr = [];
for(var i = 0; i < 10; i++){
  fnArr[i] = function(i){
    return function(){
      return i
    }
  }(i)
}
console.log(fnArr[3]());
```

```
var fnArr = []
for(var i = 0; i < 10; i++){
  !function(i){
    fnArr[i] = function(){
    return i
    }
  }(i)
}
console.log(fnArr[3]())
```

# 2、封装一个汽车对象，可以通过如下方式获取汽车状态。
```
var Car = (function(){
  var speed = 0;
  function setSpeed(s){
    speed = s
  }
  
  function getSpeed(){
    return speed
  }

  function accelerate(){
    speed = speed + 10
  }

  function decelerate(){
    speed = speed - 10
  }

  function getStatus(){
    if(speed <= 0){return 'stop'}
    else{return 'running'}
  }
  return{
    setSpeed: setSpeed,
    getSpeed: getSpeed,
    accelerate: accelerate,
    decelerate: decelerate,
    getStatus: getStatus
  }
})()
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate(); 
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error
```


# 3、下面这段代码输出的结果是？为什么？
```
var a = 1;
setTimeout(function(){
  a = 2;
  console.log(a);
},0);
var a;
console.log(a);
a = 3;
console.log(a);
```

结果：
```
1 
3
2
```

解释：
```
setTimeout最后执行，所以最后输出2
第一个console.log，a值为1
第二个console.log，a值为3
```

# 4、下面这段代码输出结果是? 为什么?
```
var flag = true;
setTimeout(function(){
  flag = false;
},0)
while(flag){}
console.log(flag)
```

结果：
```
无显示
```

解释：
```
setTimeout（）在最后执行，所以此时flag=true
while（ture）{}会一直循环执行这条代码，这条语句不输出什么，因此没有显示，也不会进行下面代码的执行
```

# 5、下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）
```
for(var i = 0; i < 5; i++){
  setTimeout(function(){
    console.log('delayer:' + i);
  },0)
  console.log(i)
}
```

结果：
```
0
1
2
3
4
delayer:5
delayer:5
delayer:5
delayer:5
delayer:5
```

解释：
```
setTimeout最后执行，for循环五次，console.log（i）会打出0,1,2,3,4，此时i为5；
setTimeout也运行五次，打出五次delayer:5
```

改变：
```
for(var i = 0; i < 5; i++){
  !function(i){
  setTimeout(function(){
    console.log('delayer:' + i);
  },0)
}(i)
  console.log(i)
}
```

# 6、 如何获取元素的真实宽高

```
var intElemScrollHeight = document.querySelector('').scrollHeight;
var intElemScrollWidth = document.querySelector('').scrollWidth;
```

# 7、URL如何编码解码？为什么要编码？

```
编码：encodeURIComponent（str）
解码：decodeURIComponent（str）
因为URL中不能出现中文等字符，需要编码为utf-8或gbk等格式
```

# 8、补全如下函数，判断用户的浏览器类型

function isAndroid(){
  return /Android/.test(window.navigator.userAgent)
}

function isIphone(){
  return /iPhone/.test(window.navigator.userAgent)
}

function isIpad(){
  return /iPad/.test(window.navigator.userAgent)
}

function isIos(){
  return /iPhone|iPad/.test(window.navigator.userAgent)
}