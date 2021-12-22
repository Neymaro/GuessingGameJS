let scoreBoard = document.querySelector('.score');
let won = document.querySelector('.guessed');
let lostCase = document.querySelector('.lost');
let wonCase = document.querySelector('.won');
let checkBtn = document.querySelector('.check-btn');
let inputValue = document.querySelector('.inputbtn');
let newGameBtn = document.querySelector('.newgamebtn');
let yourGuess = document.querySelector('.your-guess');
let chance = 10;
let pick = parseInt(Math.floor(Math.random() * 100));

function newGame(){
    inputValue.value='';
    chance = 10;
    scoreBoard.textContent=chance;
}

function noMoreChance(){
    if(chance < 0){
        lostCase.textContent="You Lost 😒"
        alert("You lost The Game!")
        newGame()
    }
}

// New Game 
newGameBtn.addEventListener('click',newGame);

// If Statements
checkBtn.addEventListener('click',function check(){
    var value = inputValue.value;
    if(value == pick){
        wonCase.textContent = "You Won!"
        won.textContent = value;
        yourGuess.textContent = "👏👏"
    }
    else if(value > 100){
        noMoreChance()
        alert("Don't insert more than 100!")
    }
    else if(value < 0){
        noMoreChance()
        alert("Dont insert less than 0!")
    }
    else if(value < pick){
        chance = chance - 1;
        noMoreChance()
        yourGuess.textContent = "Too Low!"
        scoreBoard.textContent=chance;
    }
    else if(value > pick){
        chance = chance - 1;
        noMoreChance()
        yourGuess.textContent = "Too High!"
        scoreBoard.textContent=chance;
    }
})


