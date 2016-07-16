//fix sections to top of screen on scroll to top

var hero2 = document.getElementById("hero-image-2");
var hero3 = document.getElementById("click-box");
var head = document.getElementById("header");
var headHeight = head.offsetHeight; //get height of header
var tops2 = hero2.offsetTop - headHeight; //get distance between top of hero-image-2 and bottom of header
var tops3 = hero3.offsetTop - headHeight; //get distance between top of hero-image-2 and bottom of header

window.addEventListener('scroll', function(event){
  var y = window.pageYOffset;
  if (tops2 - y <= 0) {
    hero2.className = "hero-image-2 fixin";
    hero3.className = "click-box fixin";
  } else {
    hero2.className = "hero-image-2";
    hero3.className = "click-box";
  }
  if (tops3 - y <= 0) {
    hero3.className = "click-box fixin stop";
  } else {
    hero3.className = "click-box fixin";
  }
});

//Make crazy shaped divs on click
var axis = document.getElementById("axis");
var hex = [0,1,2,3,4,5,6,7,8,9, 'a', 'b', 'c', 'd', 'e', 'f'];//for randomizing colors
var newDivCounter = 0;//for asssinging unique ids to each div

function showPosition(event) {
  newDivCounter += 1;
  var colour = [];
  var color = [];
  for (var i = 0; i < 6; i++) {
    var ind = Math.floor(Math.random()*16);
    colour.push(hex[ind]);
  }
  var col = colour.join("");//generate random hexidecimal

  for (var i = 0; i < 6; i++) {
    var ind = Math.floor(Math.random()*16);
    color.push(hex[ind]);
  }
  var roloc = color.join("");//generate another random hexidecimal

  var higher = Math.floor(Math.random()*500);//generate random number for height
  var wider = Math.floor(Math.random()*500);//generate random number for width
  var shape = Math.floor(Math.random()*100);//generate random number for radius

  axis.innerText = "You Clicked: " + event.screenX + ", " + event.screenY;

  //create new div and set styles and attributes
  var newDot = document.createElement("div");//create div

  newDot.style.borderRadius = shape + "px";
  newDot.style.position = "absolute";
  newDot.style.top = event.pageY + "px";
  newDot.style.left = event.pageX + "px";
  newDot.setAttribute("id", "id-"+ newDivCounter);
  newDot.setAttribute("class", "spot");
  newDot.style.opacity = 0;
  newDot.style.width = "5px";
  newDot.style.height = "5px";
  newDot.style.border = (wider / 10) + "px solid #fff";
  newDot.style.background = "lightblue";
  newDot.style.transition = "opacity 1s, width 1s, height 1s, border 2s, background 3s";

  document.body.appendChild(newDot);//add div to body

  window.getComputedStyle(newDot).opacity;//get computed style so it can be transformed

  //transform styles
  newDot.style.opacity = 1;
  newDot.style.width = wider + "px";
  newDot.style.height = higher + "px";
  newDot.style.border = "5px solid #" + col;
  newDot.style.background = "#" + roloc;
}

hero3.addEventListener("click", showPosition, true);

//Remove all created divs
var clearbutt = document.getElementById("clearit");

function clearValue(event) {
  axis.innerText = "Click the Pic";
  var eyeD;
  for (var i = 1; i <= newDivCounter; i++) {
    eyeD = "id-" + i;
    dis = document.getElementById(eyeD);
    dis.remove();
  }
  newDivCounter = 0;
}

clearbutt.addEventListener("click", clearValue, false);

//Two Way Binding Haiku
var text = document.getElementById("text");
var place = document.getElementById("bound");

//Print what is entered in textfield
function bindTogether(event) {
  var previousKey = [];
  var lastKey = event.keyCode;
  var letter = String.fromCharCode(lastKey);
  previousKey.push(letter);
  place.innerHTML += letter;
  if (lastKey === 13) {
    place.innerHTML += "</br>";
  }
  if (place.innerHTML.length > 0) {
    place.className ="bound content";
  } else {
    place.className ="bound";
  }
}

text.addEventListener("keypress", bindTogether, true);

//Delete what has been written
function deletion(event) {
  if (event.keyCode === 8) {
    place.innerHTML = place.innerHTML.substr(0, place.innerHTML.length - 1);
  }
  if (place.innerHTML[0]) {
    place.className ="bound content";
  } else {
    place.className ="bound";
  }
}

text.addEventListener("keydown", deletion);

// Transforming Hamburger menu
var burger = document.getElementById("nav-hamburger");
var menu = document.getElementById("menu");

function xBurger(event) {
  if (burger.getAttribute("class")=== "open") {
    burger.className = "";
  } else {
    burger.className = "open";
  }
  if (menu.getAttribute("class")=== "open") {
    menu.className = "";
  } else {
    menu.className = "open";
  }
}

burger.addEventListener("click", xBurger);

//chevron scroll to position

var downBtn = document.getElementById("down-btn");
var upBtn = document.getElementById("up-btn");
var topless = document.getElementById("topless");


var showTop = function() {
  console.log("hello");
  topless.setAttribute("class", "topped");
  downBtn.setAttribute("class", "hidden");
}

var hideTop = function() {
  topless.setAttribute("class", "offed");
  downBtn.setAttribute("class", "glyphicon glyphicon-chevron-down down-btn");

}
downBtn.addEventListener("click", showTop, false);
upBtn.addEventListener("click", hideTop, false);
