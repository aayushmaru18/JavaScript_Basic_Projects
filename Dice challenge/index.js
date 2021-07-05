
var random_number1 = Math.random();
random_number1 = (random_number1*6)+1;
var dice_change_1 = Math.floor(random_number1)
var image_name_1 = "images/dice"+dice_change_1+".png";

    

var random_number2 = Math.random();
random_number2 = (random_number2*6)+1;
var dice_change_2 = Math.floor(random_number2)
var image_name_2 = "images/dice"+dice_change_2+".png";


document.querySelector(".img1").src = image_name_1;
document.querySelector(".img2").src = image_name_2;

if (dice_change_1>dice_change_2){
    document.querySelector("h1").innerText = "Player 1 Wins!!"
}
else if (dice_change_1<dice_change_2){
    document.querySelector("h1").innerText = "Player 2 Wins!!"
}
else{
    document.querySelector("h1").innerText = "Draw"
}