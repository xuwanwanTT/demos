#Math 任务

## 1、写一个函数，返回从min到max之间的随机整数，包括min不包括max (getRandNum)

function getRandNum(min,max){
  return Math.floor(Math.random()*(max - min)) + min
}

## 2、写一个函数，返回从min到max之间的随机整数，包括min包括max (getRandNum)

function getRandNum(min,max){
  return Math.floor(Math.random()*(max - min + 1)) + min
}

## 3、写一个函数，生成一个长度为n的随机字符串，字符串的取值范围包括0到9，a到z，A到Z (getRandStr)

function getRandStr(n){
  var str = "0123456789abcdefghijkllmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var arr = []
  for(var i = 0; i < n; i++){
    arr[i] = str[Math.floor(Math.random()*64)]
  }
  return arr.join('')
}

## 4、写一个函数，生成一个随机IP地址，一个合法的IP地址为0.0.0.0 ~ 255.255.255.255（getRandIP）

function getRandIP(){
  var arr = []
  for(var i = 0; i < 4; i++){
    arr[i] = Math.floor(Math.random()*256)
  }
  return arr.join('.')
}

## 5、写一个函数，生成一个随机颜色字符串，合法的颜色为#000000 ~ #ffffff （getRandColor）

function getRandColor(){
  var arr = []
  var str = "0123456789abcdef"
  for(var i = 0; i < 6; i++){
    arr[i] = str[Math.floor(Math.random()*17)]
  }
  return '#' + arr.join('')
}

# 数组任务

## 1、数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用splice函数分别实现push、pop、shift、unshift方法

push  在数组最后添加一个元素，改变原数组，arr.push('add')
pop  把数组最后一个元素删除,改变原数组，arr.pop()
shift  删除数组第一个元素,改变原数组，arr.shift()
unshift  在数组头添加一个元素,改变原数组，arr.unshift('add')
join 将数组转换成字符串，不改变原数组，有参数，参数为连接符,arr.join('参数')
splice  添加删除，改变原数组，有参数，第一个为索引，第二个为删除的操作次数，第三个为添加内容，不写第三个则默认不添加

### 实现：
```
var arr = []
push: arr.splice(arr.length,0,add)
pop: arr.splice(arr.length-1,1)
shift: arr.splice(0,1)
unshift: arr.splice(0,0,add)
```

## 2、写一个函数操作数组，数组中的每一项变为原来的平方，在原数组上操作 （squareArr）

```
function squareArr(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i]*arr[i]
  }
  return arr[i]
}
```

```
function squareArr(arr){
  for(var i = 0; i < arr.length; i++){
    arr.splice(i,1,arr[i]*arr[i])
  }
}
```

## 3、写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变 （filterPositive）

```
function filterPostive(arr){
  var arrNew = []
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      arrNew[i] = arr[i]
      //arrNew.push(arr[i])
      //arrNew.unshift(arr[i])
    }
  }
  return arrNew
}
```

```
function filterPostive(arr){
  var arrNew = []
  arrNew = arr.sort(function(v1,v2){return v1 - v2})
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      return arrNew.slice(i)
    }
  }
}
```

# Date 任务

## 1、写一个函数getChIntv，获取当前时间到指定时间的间隔时间

```
function getChIntv(set){
  var date = Date.parse(set) - Date.now()
  var dateDay = parseInt(date/(1000*60*60*24))
  var dateHours = parseInt(date%(1000*60*60*24)/(1000*60*60))
  var dateMin = parseInt(date%(1000*60*60*24)%(1000*60*60)/(1000*60))
  var dateSec = parseInt(date%(1000*60*60*24)%(1000*60*60)%(1000*60)/(1000))
  return dateDay + "天" + dateHours + "小时" + dateMin + "分钟" + dateSec +"秒" 
}
```

## 2、把hh-mm-dd格式数字日期改成中文日期 （getChsDate）

function getChsDate(set){
  var str = "零,一,二,三,四,五,六,七,八,九,十,十一,十二,十三,十四,十五,十六,十七,十八,十九,二十,二十一,二十二,二十三,二十四,二十五,二十六,二十七,二十八,二十九,三十,三十一"
  var dateStr = str.split(',')
  var dateSet = set.split('-')
  var yearStr = dateSet[0]
  var mouStr = dateSet[1]
  var dayStr = dateSet[2]
  var chsYear = dateStr[parseInt(yearStr[0])] + dateStr[parseInt(yearStr[1])] + dateStr[parseInt(yearStr[2])] + dateStr[parseInt(yearStr[3])] + "年"
  var chsMou = dateStr[parseInt(mouStr)] + "月"
  var chsDay = dateStr[parseInt(dayStr)] + "日"
  return chsYear + chsMou + chsDay
}

## 3、写一个函数（friendlyDate），参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串：
- 刚刚（t距当前时间不到1分钟时间间隔）
- 3分钟前（t距当前时间大于等于1分钟，小于1小时）
- 8小时前（t距当前时间大于等于1小时，小于24小时）
- 3天前（t距当前时间大于等于24小时，小于30天）
- 2个月前（t距当前时间大于等于30天，小于12个月）
- 8年前（t距当前时间大于等于12个月）

```
function friendlyDate(time){
var date = Date.now() - time
if(date < (60*1000)){console.log("刚刚")}
else if(date < (60*60*1000) && date >= 60000){console.log("3分钟前")}
else if(date < (24*60*60*1000) && date >= (60000*60)){console.log("8小时前")}
else if(date < (3600000*24*30) && date >= (60000*60*24)){console.log("3天前")}
else if(date < (3600000*24*30*12) && date >= (60000*60*24*30)){console.log("2个月前")}
else if(date >= (3600000*24*30*12)){console.log("8年前")}
}
```