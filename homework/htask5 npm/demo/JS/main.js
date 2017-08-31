import "../CSS/part1.css"
import "../CSS/part2.css"

var GoTop = require("./goTop.js")
var WaterPull = require("./waterPull.js")
var GetNews = require("./loadMore.js")
var carousel = require("./carousel.js")
var $ = require('jquery')

new GoTop()
new WaterPull()
new GetNews()
carousel.init($('.part1'))