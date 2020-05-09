//get
let newGameButton = document.getElementById("new-game");
let rollDiceButton = document.getElementById("roll-dice");
let holdButton = document.getElementById("hold");
let diceImage = document.getElementById("dice-image");
let winLose = document.getElementById("win-lose");
let wrapper = document.getElementById("wrapper");

let player1Box = document.getElementById("player1");
let player2Box = document.getElementById("player2");

let p1Score = document.getElementById("p1score");
let p2Score = document.getElementById("p2score");

let p1Current = document.getElementById("p1current");
let p2Current = document.getElementById("p2current");

//scores
let player1Score = 0;
let player2Score = 0;
let player1Current = 0;
let player2Current = 0;
let turn = true; // true = player 1 / false = player 2
let gameOver = false;
let currentTurn = "";

const checkTurn = () => {
    if(turn == true) {
        currentTurn = "Player 1";
    } else if (turn == false) {
        currentTurn = "Player 2";
    }
}

const buttonsVisible = () => {
    rollDiceButton.style.visibility = "visible";
    holdButton.style.visibility = "visible";
}

const buttonsInvisible = () => {
    rollDiceButton.style.visibility = "hidden";
    holdButton.style.visibility = "hidden";
}

rollDiceButton.addEventListener("click", ()=> {
    console.log("roll dice");
    let randomNum = Math.ceil(Math.random() * 6);
    diceImage.src = `img/dice${randomNum}.png`;
    if(turn == true) {
        p1Score.innerHTML = player1Score += randomNum;
        check(randomNum);
    } else if (turn == false) {
        p2Score.innerHTML = player2Score += randomNum;
        check(randomNum);
    }
})

const check = (randomNum) => {
    if(player1Current > 19 || player2Current > 19) {
        wrapper.style.backgroundColor = "black";
        winLose.innerHTML = `${currentTurn} is the winner!`;
        buttonsInvisible();
        gameOver = true;
    } else if (randomNum == 1) {
        winLose.innerHTML = `${currentTurn} loses. You rolled a 1!`;
        buttonsInvisible();
        wrapper.style.backgroundColor = "black";
        gameOver = true;


    }
}

const newGame = () => {
    rollDiceButton.style.visibility = "visible";
    holdButton.style.visibility = "visible";
    reset();
    colorChange();
    buttonsVisible();
    diceImage.src = `img/dice0.png`;

}


const colorChange = () => {
    if(turn == true && gameOver == false) {
        player1Box.style.backgroundColor = "red";
        player2Box.style.backgroundColor = "white";
    } else if (turn == false  && gameOver == false) {
        player2Box.style.backgroundColor = "green";
        player1Box.style.backgroundColor = "white";
    }
}
const reset = () => {
    player1Score = 0;
    player2Score = 0;
    player1Current = 0;
    player2Current = 0;
    turn = true;
    p1Score.innerHTML = 0;
    p1Current.innerHTML = 0;
    p2Score.innerHTML = 0;
    p2Current.innerHTML = 0;
    winLose.innerHTML = "";
    wrapper.style.backgroundColor = "white";
    gameOver = false;
    currentTurn = "Player 1";

}

newGameButton.addEventListener("click", ()=> {
    console.log("new game button");
    newGame();
})

hold.addEventListener("click", ()=> {
    updateScore();
    checkTurn();
    check();
    turn = !turn;
    colorChange();
})

const updateScore = () => {
    if(turn == true) {
        let totalp1 = player1Current += player1Score;
        p1Current.innerHTML = totalp1;
        player1Score = 0;
        p1Score.innerHTML = 0
    } else if (turn == false) {
        let totalp2 = player2Current += player2Score;
        p2Current.innerHTML = totalp2;
        player1Score = 0;
        player2Score = 0;
        p2Score.innerHTML = 0
    }
}