var $ = require('jquery')
function GoTop(){
  this.bind()
}
GoTop.prototype.bind = function(){
  var _this = this
  var $node = $('<p id="goTop">回到顶部</p>')
  $('body').append($node)
  $node.click(function(){
    _this.back()
  })
}

GoTop.prototype.back = function(){
  $('body').animate({"scrollTop":0},800)
}

module.exports = GoTop


// define(["jquery"],function(){
//   function GoTop(){
//     this.bind()
//   }
//   GoTop.prototype.bind = function(){
//     var _this = this
//     var $node = $('<p id="goTop">回到顶部</p>')
//     $('body').append($node)
//     $node.click(function(){
//       _this.back()
//     })
//   }

//   GoTop.prototype.back = function(){
//     $('body').animate({"scrollTop":0},800)
//   }

//   return GoTop
// })