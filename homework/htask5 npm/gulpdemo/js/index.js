document.querySelector('img').addEventListener('click',function(){
  var part1 = this.getAttribute('src')
  var part2 = this.getAttribute('data-src')
  this.setAttribute('src',part2)
  this.setAttribute('data-src',part1)  
})