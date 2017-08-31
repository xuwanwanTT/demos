var $ = require('jquery')

function WaterPull(){
  this.init()
  this.bind()
}

WaterPull.prototype.init = function(){
  this.windowWidth = $('.part2 > .container').width()
  this.nodeWidth = $('.part2 > .container > li').outerWidth(true)
  this.idx = parseInt(this.windowWidth/this.nodeWidth)
}

WaterPull.prototype.waterPull = function(){
  var _this = this
  var arr = []
  
  for(var i = 0; i < this.idx; i++){
    arr[i] = 0
  }

  $('.part2 > .container > li').each(function(idx,node){
    var min = Math.min.apply(null,arr)
    var minidx = arr.indexOf(min)
    $(node).css({
      left: _this.nodeWidth*minidx,
      top: min
    })
    arr[minidx] += $(node).outerHeight(true)
    var max = Math.max.apply(null,arr)
    $('.part2 > .container').css("height",max)
  })
}

WaterPull.prototype.bind = function(){
  var _this = this

  $('.part2 > .container > li > img').on('load',function(){
    _this.waterPull()
  })
  // $('.part2 > .container > li > img').one('load',function(){
  //   _this.waterPull()
  // }).each(function(){
  //   if(this.complete){$(this).load()}
  // })

  $(window).resize(function(){
    _this.init()
    _this.waterPull()
  })
}

module.exports = WaterPull

// define(['jquery'],function(){
//   function WaterPull(){
//     this.init()
//     this.bind()
//   }

//   WaterPull.prototype.init = function(){
//     this.windowWidth = $('.part2 > .container').width()
//     this.nodeWidth = $('.part2 > .container > li').outerWidth(true)
//     this.idx = parseInt(this.windowWidth/this.nodeWidth)
//   }

//   WaterPull.prototype.waterPull = function(){
//     var _this = this
//     var arr = []
    
//     for(var i = 0; i < this.idx; i++){
//       arr[i] = 0
//     }

//     $('.part2 > .container > li').each(function(idx,node){
//       var min = Math.min.apply(null,arr)
//       var minidx = arr.indexOf(min)
//       $(node).css({
//         left: _this.nodeWidth*minidx,
//         top: min
//       })
//       arr[minidx] += $(node).outerHeight(true)
//       var max = Math.max.apply(null,arr)
//       $('.part2 > .container').css("height",max)
//     })
//   }

//   WaterPull.prototype.bind = function(){
//     var _this = this
//     $('.part2 > .container > li > img').one('load',function(){
//       _this.waterPull()
//     }).each(function(){
//       if(this.complete){$(this).load()}
//     })

//     $(window).resize(function(){
//       _this.init()
//       _this.waterPull()
//     })
//   }

//   // new WaterPull()

//   return WaterPull
// })