var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;

var randomeImgSrc1="dice"+n1+ ".png";
document.querySelector(".img1").setAttribute("src",randomeImgSrc1);

var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;
var randomeImgSrc2="dice"+n2+".png";
document.querySelector(".img2").setAttribute("src",randomeImgSrc2);
if(n1>n2)
{
  document.querySelector("h1").innerHTML="🏆Player 1 Wins!";
}
else if (n1<n2) {
  document.querySelector("h1").innerHTML="🏆Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML="Draw!"
}
