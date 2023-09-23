var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1 

var names = require('dota2-heroes');
var randomName = names.random();
console.log(randomName);

var randomDiceImage1 = 'images/' + "dice" + randomNumber1 + '.png';
var randomDiceImage2 = 'images/' + "dice" + randomNumber2 + '.png';

var image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomDiceImage1)

var image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomDiceImage2)

if (randomDiceImage1 > randomDiceImage2) {
    document.querySelector('h1').innerHTML= 'Wins!';
} 
else if (randomDiceImage1 < randomDiceImage2) {
    document.querySelector('h1').innerHTML= 'Wins!';
}
else {
    document.querySelector('h1').innerHTML='🧚 Friendship 🧚 🧚 Winx! 🧚' 
}