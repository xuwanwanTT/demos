var $ = require('jquery')

var carousel = (function(){
  function _Carousel(ct){
  this.init(ct)
  this.bind()
  }

  _Carousel.prototype.init = function(ct){
    this.ct = ct
    this.$imgs = this.ct.find('.imgCt')
    this.$img = this.ct.find('li')
    this.$left = this.ct.find('.ret')
    this.$next = this.ct.find('.next')
    this.imgCount = this.$img.length
    this.imgWidth = this.$img.width()
    this.idx = 0
    this.$panels = this.ct.find('.panels > h2')
  }

  _Carousel.prototype.bind = function(){
    var _this = this
    this.imgAdd()
    this.$next.click(function(){_this.playN()})
    this.$left.click(function(){_this.playL()})
    this.play()
  }

  _Carousel.prototype.imgAdd = function(){
    this.$imgs.append(this.$img.eq(0).clone())
    this.$imgs.prepend(this.$img.eq(this.imgCount - 1).clone())
    this.$imgs.css('width',(this.imgCount+2)*this.imgWidth)
  }

  _Carousel.prototype.playN = function(){
    var _this = this
    this.$imgs.animate({'left': '-=' + _this.imgWidth},function(){
      _this.idx++
      if(_this.idx === _this.imgCount){
        _this.idx = 0
        _this.$imgs.css('left',-_this.imgWidth)
      }
      _this.$panels.eq(_this.idx).addClass('active').siblings().removeClass('active')
    })
  }

  _Carousel.prototype.play = function(){
    var _this = this
    setInterval(function(){_this.playN()},1500)
  }

  _Carousel.prototype.playL = function(){
    var _this = this
    this.$imgs.animate({'left': '+=' + _this.imgWidth},function(){
      _this.idx--
      if(_this.idx < 0){
        _this.idx = _this.imgCount - 1
        _this.$imgs.css('left',-_this.imgWidth*_this.imgCount)
      }
      _this.$panels.eq(_this.idx).addClass('active').siblings().removeClass('active')
    })
  }
  
  return {
    init: function($ct){
      $ct.each(function(idx,node){
        new _Carousel($(node))
      })
    }
  }
})()

module.exports = carousel

// define(['jquery'],function(){
//   var carousel = (function(){
//     function _Carousel(ct){
//     this.init(ct)
//     this.bind()
//     }

//     _Carousel.prototype.init = function(ct){
//       this.ct = ct
//       this.$imgs = this.ct.find('.imgCt')
//       this.$img = this.ct.find('li')
//       this.$left = this.ct.find('.ret')
//       this.$next = this.ct.find('.next')
//       // this.$span = this.ct.find('.btns > span')
//       this.imgCount = this.$img.length
//       this.imgWidth = this.$img.width()
//       this.idx = 0
//       this.$panels = this.ct.find('.panels > h2')
//     }

//     _Carousel.prototype.bind = function(){
//       var _this = this
//       this.imgAdd()
//       this.$next.click(function(){_this.playN()})
//       this.$left.click(function(){_this.playL()})
//       this.play()
//     }

//     _Carousel.prototype.imgAdd = function(){
//       this.$imgs.append(this.$img.eq(0).clone())
//       this.$imgs.prepend(this.$img.eq(this.imgCount - 1).clone())
//       this.$imgs.css('width',(this.imgCount+2)*this.imgWidth)
//     }

//     _Carousel.prototype.playN = function(){
//       var _this = this
//       this.$imgs.animate({'left': '-=' + _this.imgWidth},function(){
//         _this.idx++
//         // _this.$span.eq(_this.idx).addClass('active').siblings().removeClass('active')
//         if(_this.idx === _this.imgCount){
//           _this.idx = 0
//           _this.$imgs.css('left',-_this.imgWidth)
//         }
//         _this.$panels.eq(_this.idx).addClass('active').siblings().removeClass('active')
//       })
//     }

//     _Carousel.prototype.play = function(){
//       var _this = this
//       setInterval(function(){_this.playN()},1500)
//     }

//     _Carousel.prototype.playL = function(){
//       var _this = this
//       this.$imgs.animate({'left': '+=' + _this.imgWidth},function(){
//         _this.idx--
//         // _this.$span.eq(_this.idx).addClass('active').siblings().removeClass('active')
//         if(_this.idx < 0){
//           _this.idx = _this.imgCount - 1
//           _this.$imgs.css('left',-_this.imgWidth*_this.imgCount)
//         }
//         _this.$panels.eq(_this.idx).addClass('active').siblings().removeClass('active')
//       })
//     }

//     // _Carousel.prototype.play = function(){
//     //   var _this = this
//     //   this.$span.click(function(){
//     //     _this.idx = $(this).index()
//     //     $(this).addClass('active').siblings().removeClass('active')
//     //     _this.$imgs.animate({'left': -_this.imgWidth*(_this.idx+1)})
//     //   })
//     // }
    
//     return {
//       init: function($ct){
//         $ct.each(function(idx,node){
//           new _Carousel($(node))
//         })
//       }
//     }
//   })()

//   // carousel.init($('.part1'))
//   return carousel
// })
