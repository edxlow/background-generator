var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorBtn= document.querySelector(".randomBtn");

// var style = getComputedStyle(body);
// var backgroundColor = style.background;
// css.innerHTML= backgroundColor;
changeColor();

//Takes the 2 input colors and change the background
function changeColor(){
	body.style.background=
	"linear-gradient(to right,"
	+ color1.value
	+ ","
	+ color2.value
	+ ")";
//Can use css.TextContent too
	css.innerHTML = body.style.background+ ";";
}

function randomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateColor(){
	color1.value= randomColor();
	color2.value= randomColor();
	changeColor();
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
colorBtn.addEventListener("click", generateColor);
