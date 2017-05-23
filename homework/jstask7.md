# 1、\d，\w，\s，[a-zA-Z0-9],\b，.，*，+，?，x{3}，^，$，分别是什么？

```
\d  匹配一个数字，等同[0-9]
\w  匹配大小写字母和数字以及下划线，等同于[a-zA-z0-9_]
\s  匹配空白符，等同于[\t\n\f\r\x0B]
[a-zA-Z0-9]  匹配大小写字母和数字
\b  匹配单词边界
.  匹配除了回车符和换行符之外的所有字符，等同于[^\r\n]
*  匹配出现任意次的某字符
+  匹配出现至少一次的某字符
?  匹配出现至多一次的某字符
x{3}  匹配有“xxx”出现的字符串
^  匹配以某字符开头
$  匹配以某字符结尾
```

# 2、写一个函数trim(str)，去除字符串两边的空白字符

```
function trim(str){
  return str.replace(/^\s+|\s+$/g,'')
}
```
# 3、写一个函数isEmail(str)，判断用户输入的是不是邮箱

```
function isEmail(str){
  var reg = /[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]+/
  return reg.test(str)
}
```

# 4、写一个函数isPhoneNum(str)，判断用户输入的是不是手机号

```
function isPhoneNum(str){
  var reg = /[0-9]+/
  if(str.length === 11){
    return reg.test(str)
    }else{
      return false
    }
}
```

# 5、写一个函数isValidUsername(str)，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）

```
function isValidUsername(str){
  var reg = /[^\w+]/
  if(str.length <= 20 || str.length >= 6){
    if(reg.test(str)){
      return false
      }else{
        return true
      }
  } else{
    return false
  }
}
```

# 6、写一个函数isValidPassword(str)，判断用户输入的是不是合法密码（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少包括两种）

方法一：

```
function isValidPassworld(str){
  if(str.length < 6 || str.length > 20 || /\W+/.test(str)) return false;
  if(/^[a-z]+$/.test(str)) return false;
  if(/^[A-Z]+$/.test(str)) return false;
  if(/^[0-9]+$/.test(str)) return false;
  if(/^_+$/.test(str)) return false;
  else return true;
}
```

方法二：

```
function isValidPassworld(str){
  if(str.length < 6 || str.length > 20 || /\W+/.test(str)) return false;
  var count = 0;
  if(/[a-z]+/.test(str)) count++;
  if(/[A-Z]+/.test(str)) count++;
  if(/[0-9]+/.test(str)) count++;
  if(/_+/.test(str)) count++;
  if(count >= 2) return true;
  else return false
}
```

# 7、写一个正则表达式，得到如下字符串里所有的颜色
```
var re = /*正则...*/
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee"
console.log(subj.match(re))  //['#121212', '#AA00ef']
```

解答：
```
/#[0-9a-fA-F]{6}/g
```



# 8、下面代码输出什么？为什么？改写代码，让其输出[""hunger"",""world""].
```
var str = 'hello "hunger",hello "world"';
var pat = /".*"/g;
str.match(pat);
```

输出：[""hunger",hello "world""]
原因：默认为贪婪模式；.表示匹配所有不是回车符或换行符的字符，*表示匹配任意个，所以字符引号，逗号，空格都会被匹配，从而输出一个整体。
改写：var pat = /".*"?/g，改为非贪婪模式就好了；雾：改正则，var pat = /"[a-z]+"/g；让其只匹配字母也能得出结论。