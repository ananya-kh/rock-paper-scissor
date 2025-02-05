let symbols = document.querySelectorAll(".symbol");
let msg = document.getElementById("msg");

let userScorepara= document.getElementById("yourscr");
let compScorepara= document.getElementById("compscr");

let userScore=0;
let compScore=0;

symbols.forEach(symbol => {
    symbol.addEventListener("click", () => {
        userChoice = symbol.getAttribute("id");
        playGame(userChoice);
    })
});

const playGame = (userChoice) => {
    //generate comp choice
    const compChoice = genCompchoice();
    //checkwinner
    if (userChoice === compChoice) {
        drawGame();
        // return;
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            //paper,scissor
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            //rock,scissor
            userWin = compChoice === "Scissors" ? false : true;
        }
        else if (userChoice === "Scissors") {
            userWin = compChoice === "Rock" ? false : true;
        }
        showwinner(userWin, userChoice, compChoice);
    }
};

const genCompchoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again"
    msg.style.backgroundColor = "blue";
}

const showwinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green"
    }
    else {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText = (`You lost.${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "Red"
    }
}