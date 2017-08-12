# 1、dom对象的innerText和innerHTML有什么区别？

- innerText：获取标签内所有文本，并连成一个字符串
- innerHTML：获取文本时连带着标签，并连成一个字符串

# 2、elem.children和elem.childNodes的区别？

```
elem.children获取当前元素下的所有子元素
elem.childNodes获取当前元素下的所有节点，包括空白的文本节点
```

# 3、查询元素有几种常见的方法？ES5的元素选择方法是什么？

- 常见方法：
- getElementById();getElementByClassName();getElementByTagName();getElementByName()

- ES5的方法：
- querySelector()；querySelectorAll();elementFromPoint();

# 4-5、如何创建一个元素？如何给元素设置属性？如何删除元素？如何给页面元素添加子元素？如何删除页面元素下的子元素？

```
var a = document.createElement("标签名1")  //创建元素
var b = document.createTextNode("内容")  //创建元素内容
var c = document.createElement("标签名2")
var d = document.createElement("标签名3")

a.appendChild(b)  //将内容写到标签内
var e = a.insertBefor(c,a.firstchild)  //将标签2添加到标签1中
e.replacechild(d,c)  //将标签2替换成标签3，达到添加目的

document.body.appendChild(a)  //将标签写入到body并在页面展现

a.setAttribute("属性名","属性值")  //设置属性

a.removeAttribute("属性名")  //删除元素属性
document.body.removeChild(a)  //删除元素

```

# 6、elem.classList有哪些方法？如何判断一个元素的class列表中包含某个class？如何添加一个class？如何删除一个class？

```
方法：

add(String[,String])  //添加指定的类值
remove(String[,String])  //删除指定的类值
item（Number）  //按集合中的索引返回类值
toggle（String[,force]）  //当只有一个参数时,如果类存在，删除并返回false；如果不存在，添加并返回true    当有第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值；如果计算结果为false，则删除
contains(String)  //检查元素的类属性中是否存在指定的类值

判断：

使用contains

添加删除：

直接add，remove
toggle也行

测试如图
```
![jstask8.png](http://upload-images.jianshu.io/upload_images/5430411-02c239746613912b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 7、如何选中如下代码所有的li元素？如何选中btn元素？
```
<div class="mod-tabs">
  <ul>
    <li>list1</li>
    <li>list2</li>
    <li>list3</li>
  </ul>
  <button class="btn">点我</button>
</div>
```

```
document.querySelectorAll("li")
document.querySelector(".btn")

document.getElementsByTagName("li")
document.getElementsByClassName("btn")
```