var $ = require('jquery')
var WaterPull = require('./waterPull.js')


function GetNews(){
  this.curPage = 1
  this.clock = false
  this.bind()
}
GetNews.prototype.bind = function(){
  var _this = this
  $('.part2 > .btn').click(function(){
    _this.getNews()
  })
}
GetNews.prototype.getNews = function(){
  var _this = this
  if(this.clock){return}
  this.clock = true
  $.ajax({
    url: 'https://platform.sina.com.cn/slide/album_tech',
    dataType: 'jsonp',
    jsonp:"jsoncallback",
    data: {
      app_key: '1271687855',
      num: '3',
      page:_this.curPage
    }
  })
    .done(function(ret){
      _this.clock = false
      _this.appendHtml(ret.data)
      new WaterPull()
      _this.curPage++
    })
    .fail(function(){
      alert("系统错误")
    })
}

GetNews.prototype.appendHtml = function(news){
  var htmls = ''
  $.each(news,function(){
    htmls += '<li><img src="' + this.img_url + '">'
    htmls += '<p>' + this.short_intro + '</p></li>'
  })
  $('.part2 > .container').append(htmls)
}

module.exports = GetNews
