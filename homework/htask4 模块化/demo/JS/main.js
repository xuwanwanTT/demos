requirejs(['waterPull',"loadMore","carousel","goTop"],function(waterPull,GetNews,Carousel,goTop){
  new goTop()
  new waterPull()
  new GetNews()
  Carousel.init($('.part1'))
})
