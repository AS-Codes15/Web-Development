let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${userChoice} beats your ${compChoice}`
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3);

    return options[ranIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
   
    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //scissors, rock
            userWin = compChoice === "scissors" ? false : true 
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);
    })
})