# 1、DOM0事件和DOM2级在事件监听使用方式上有什么区别？

- DOM0事件：on+事件类型；可以在html行内直接绑定，也可以在js中使用，形如onclicke=function(){}；相同事件绑定会产生覆盖
- DOM2事件：通过addEventListener和removeEventListener进行事件绑定

# 2、attachEvent与addEventListener的区别？

```
attachEvent是在旧IE版本中使用的方法，需要传递两个参数，第一个为on+事件类型，第二个为操作函数，并且只在冒泡阶段执行添加的事件处理程序；对同一个事件添加多个事件处理程序执行时无序；事件处理程序的作用域为全局

addEventListener目前主流浏览器都支持，可以传递三个参数，第一个为事件类型，第二位操作函数，第三个可选，默认为false，表示在冒泡阶段执行添加的事件处理程序，设为true，表示在捕获阶段执行添加的事件处理程序；对同一个事件添加多个事件处理程序执行时按添加顺序执行；事件处理程序的作用域为元素本身
```

# 3、解释IE事件冒泡和DOM2事件传播机制？

```
IE事件冒泡传播机制：事件开始时，由最具体的元素接受，然后一层层向上传递给父级元素

DOM2事件传播机制：分为三个阶段：事件捕获阶段，处于目标阶段，事件冒泡阶段。事件捕获阶段表现和冒泡阶段相反，事件开始时，由最上层元素接受，然后一层层向下传递给子元素
```

# 4、如何阻止事件冒泡？如何阻止默认事件？

```
阻止事件冒泡:
事件处理程序中的函数中写入e.stopPropagation()，并且addEventListener的第三个参数为false

阻止默认事件：
事件处理程序中的函数中写入e.preventDefault()
```


# 5、有如下代码，要求当点击每一个元素li时控制台展示该元素的文本内容。不考虑兼容
```
<ul class="ct">
  <li>这里是</li>
  <li>饥人谷</li>
  <li>前端任务班</li>
</ul>
<script>
//todo...
</script>
```

```
var ct = document.getElementsByClassName('ct')
ct[0].addEventListener('click',function(e){
  console.log(e.target.innerText)
})
```

# 6、补全代码，要求：
- 当点击按钮开头添加时在```<li>这里是</li>```元素前添加一个新元素，内容为用户输入的非空字符串；当点击结尾添加时在最后一个li元素后添加用户输入的非空字符串。
- 当点击每一个元素li时控制台展示该元素的文本内容。
```
<ul class="ct">
  <li>这里是</li>
  <li>饥人谷</li>
  <li>任务班</li>
</ul>
<input class="ipt-add-content" placeholder="添加内容"/>
<button id="btn-add-start">开头添加</button>
<button id="btn-add-end">结尾添加</button>
<script>
//你的代码
</script>
```

```
var ipt = document.getElementsByClassName('ipt-add-content')
var ct = document.getElementsByClassName('ct')
var btnEnd = document.getElementById("btn-add-end")
var btnStart = document.getElementById("btn-add-start")
var newli

ct[0].addEventListener('click',function(e){
  console.log(e.target.innerText)
})

ipt[0].addEventListener('change',function(){
  if(ipt[0].value.length !== 0){
    newli = document.createElement("li");
    newli.innerText = ipt[0].value;}
})

btnEnd.addEventListener('click',function(){
  ct[0].appendChild(newli)
})

btnStart.addEventListener('click',function(){
  ct[0].insertBefore(newli,ct[0].firstChild)
})
```



# 7、补全代码，要求：当鼠标放置在li元素上，会在img-preview里展示当前li元素的data-img对应的图片。
```
<ul class="ct">
    <li data-img="http://cdn.jirengu.com/book.jirengu.com/img/11.jpg">鼠标放置查看图片1</li>
    <li data-img="http://cdn.jirengu.com/book.jirengu.com/img/13.jpg">鼠标放置查看图片2</li>
    <li data-img="http://cdn.jirengu.com/book.jirengu.com/img/14.jpg">鼠标放置查看图片3</li>
</ul>
<div class="img-preview"></div>
<script>
//你的代码
</script>
```

```
var ct = document.getElementsByClassName("ct")
var preview = document.getElementsByClassName("img-preview")
ct[0].addEventListener('mousemove',function(e){
  var srcvalue = e.target.getAttribute('data-img')
  preview[0].innerHTML= '<img src="' + srcvalue + '">'
})
```