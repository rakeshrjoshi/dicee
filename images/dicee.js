var randomNumber1=Math.floor(Math.random()*6)+1;

var imageSelector="dice"+randomNumber1+".png";
var imageSelecting="images/"+imageSelector;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSelecting);

var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
console.log(randomNumber2);

var imageSelector2="dice"+randomNumber2+".png";
var imageSelecting2="images/"+imageSelector2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSelecting2);

if(randomNumber1<randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML="Player 2 wins!!"
}
else if(randomNumber1>randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML="Player 1 wins!!"
}
else{
  document.querySelectorAll("h1")[0].innerHTML="Match got draw";
}