# 1、使用数组拼接出如下字符串
```
var prod = {
  name: '女装',
  style: ['短款','冬季','春装']
};
function getTpl(data){

};
var result = getTpl(prod); //result为下面的字符串

<dl class="product">
  <dt>女装</dt>
  <dd>短款</dd>
  <dd>冬季</dd>
  <dd>春装</dd>
</dl>
```

解答：
```
function getTpl(data){
  console.log('<dl class="product">')
  for(var i in data){
    if(typeof data[i] !== "object"){console.log("  <dt>" + data[i] + "</dt>")}
    else {
      for(var j in data[i]){console.log("  <dd>" + data[i][j] + "</dd>")}
    }
  }
  console.log("</dl>")
}
```

# 2、写出两种以上声明多行字符串的方法

1. 使用转义符"\"
```
var a = "a\
b\
c"
```

2. 使用"+"
```
var a ="a"
      + "b"
      + "c"
```

# 3、补全如下代码，让输出结果为字符串：hello\\饥人谷

```
var str = "hello\\\\饥人谷"
console.log(str)
```

# 4、以下代码输出什么？为什么？
```
var str = 'jirengu\nruoyu'
console.log(str.length)
```

结果：13
分析：转义符"\",组成"\n"后表示换行符，为一个字符。

# 5、写一个函数，判断一个字符串是回文字符串，如abcdcba是回文字符串，abcdcbb不是

使用循环：

```
function f(str){
  var j = 0
  for(var i = 0; i < str.length; i++){
    if(str[i] === str[str.length-1-i]){j++}
  }
  if(j === str.length){console.log(str + "是回文字符串")}
  else {console.log(str + "不是回文字符串")}
}
```

转换数组：
//函数的命名，判断：isxxx
```
function isPalindrome(str){
  return str === str.split('').reverse().join('')
}
```

# 6、写一个函数，统计字符串里出现频率最多的字符

解答：

```
function f(str){
  var dict = {};
  var max = 0;
  var maxch;
  for(var i = 0; i < str.length; i++){
    var ch = str[i]
    if(dict[ch] === undefined){
      dict[ch] = 1
    }else {
        dict[ch]++
    }
    if(dict[ch] > max){
      max = dict[ch]; 
      maxch = str[i]
    }
  }
  return {index:max,ch:maxch}
}
```

# 7、写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串

解答：

```
function camelize(str){
  var arr = str.split('-');
  for(var i = 0; i < arr.length; i++){arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)}
  return arr.join('')
}
```

# 8、写一个ucFirsst函数，返回第一个字母为大写

解答：

```
function ucFirst(str){
  var str1 = str[0].toUpperCase();
  var str2 = str.substr(1,str.length-1).toLowerCase();
  console.log(str1 + str2)
}
```

# 9、写一个函数truncate（str,maxlength）,如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如：
```
truncate("hello, this is hunger valley,",10) == "hello, thi...";
truncate("hello world",20) == "hello world"

```

解答：

```
function truncate(str,maxlength){
  if(str.length <= maxlength){console.log(str)}
  else {console.log(str.substr(0,maxlength) + "...")}
}
```

# 10、什么是json？什么是json语法？JSON语言如何表示对象？window.JSON是什么？

JSON，JavaScrpt Object Notation,一种轻量级的数据交换格式。

json语法：
1. 键值对
2. 逗号","分隔
3. 花括号保存对象
4. 方括号保存数组

书写格式：
注意名称一定加引号，例：
```
{
  "24": "number",
  "name": "Bob"
}
```

window.JSON，用于判断浏览器是否兼容JSON的用法。

# 11、如何把JSON格式的字符串转换为JS对象？如何把JS对象转换为JSON格式的字符串？

stringify: 把JSON对象转化为字符串
```
var json = {
  11: "Bob",
  age: 24
};
console.log(JSON.stringify(json)) //{"name": "Bob","age": 24}
```

parse：把字符串转化为JSON对象,需要是json的格式样子的字符串
```
var str = "aaa"
console.log(JSON.parse(str))  //报错
```
```
var str = '{"name": "Bob","age": 24}'
console.log(JSON.parse(str))  //object {name: "Bob",age: 24}
```
