var randomNumber1 = Math.floor(6*Math.random())+1;
var randomNumber2 = Math.floor(6*Math.random())+1;
var im1 = "images/dice"+randomNumber1+".png"
var im2 = "images/dice"+randomNumber2+".png"
var i1 = document.querySelectorAll("img")[0];
i1.setAttribute("src",im1);
var i2 = document.querySelectorAll("img")[1];
i2.setAttribute("src",im2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "PLAYER 1 WON";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "PLAYER 2 WON";
}
else{
  document.querySelector("h1").innerHTML = "DRAW";
}
