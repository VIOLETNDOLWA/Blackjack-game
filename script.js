let player = {
    name : "Vio",
    chips : 155
}
let Cards = []
let sum = 0;
hasBlackJack = false;
let isAlive = false;
let message ="";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl = document.getElementById("player-el");
console.log(Cards)

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}
    console.log(getRandomCard())

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    Cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
renderGame();
}
function renderGame(){
cardEl.textContent = "Cards: " ;
for(let i = 0; i < Cards.length; i++){
    cardEl.textContent += Cards[i] + " "; 
}
sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card"
        }else if (sum === 21){
        message = "You have got  Blackjack";
        hasBlackJack = true
        
        }else{
        message = "You are out of the game";
        isAlive = false
        
    }
    messageEl.textContent = message

}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
    sum += card;
    Cards.push(card);
    renderGame();
    
    }
}
// AND &&

let hasSolvedChallenge = true;
let hasHintsLeft = true;

if (hasSolvedChallenge === true || hasHintsLeft === true){
    showSolution()
}
function showSolution(){
    console.log("Showing the solution");
}

// object
let person = {
    name: "Leila",
    age:4 ,
    country: "Kenya"
}
function logData(){
    console.log(person.name + " " + "is " + person.age + " " + " years old and lives in " + person.country);
}
logData();


let largetsCountries = ["China","India","USA","Indonesia","Pakistan"]
    for(let i = 0; i < largetsCountries.length; i++){
        console.log(" - " + largetsCountries[i])
    largetsCountries.push("Tuvalu");
    console.log(largetsCountries);
    largetsCountries.pop();
    console.log(largetsCountries)
    largetsCountries.shift("America");
    console.log()

}
// Math.random - it generate random number f between 0 and 1 (not inclusive of  1  i.e 0.000- 0.999)
// let randomNumber = Math.floor(Math.random() * 6) + 1 
//     console.log(randomNumber);

// let flooredNumber = Math.floor(3.55637)
//     console.log(flooredNumber)

//     function rollDice(){
//         let randomNumber = Math.floor(Math.random() * 6) + 1 
//         return randomNumber;
//     }
//     console.log(rollDice())
// Arrays
// 
// let cards =[7,3,9]
// for (let i = 0 ; i < cards.length; i++){
//     console.log(cards[i]);
// }
// let names = ['vio ','leila ','charles ', 'wisdom ',' darius '];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }
// let sentence =  ["Hello","my","name","is", "vio"];
// let greetingEl = document.getElementById("greeting-el");

// for(i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] +" ";
// }

// let player1Time = 102;
// let player2Time = 107;

// function getFastestRace(){
//     if (player1Time > player2Time){
//         return player1Time
//     }else if (player2Time < player1Time){
//         return player2Time
//     }else {
//         return player1Time
//     }
// }
// let fastestRace = getFastestRace();
// console.log(fastestRace); 

// function getTotalRaceTime(){
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime)
    





