let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");  // all class of 'choice' are stored in choices

const msg = document.querySelector("#status");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
}

const drawGame = () =>{
    
    msg.innerHTML ="Game draw";
    msg.style.backgroundColor ="rgba(1, 13, 51, 0.904)";
};

const showWinner= (userWin,userChoice,compChoice) =>{
     if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerHTML = `You Win, Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor ="green";
     }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerHTML =`You Lose, Computers ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor ="red";
     }
};

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="stone"){
            // comp can choice scissor or paper    
            userWin = compChoice=="paper" ? false : true;
        }else if(userChoice==="paper"){
            // comp can choice scissor or stone
            userWin = compChoice=="scissor" ? false : true;
        }else{
            //user has scissor 
            // comp can choice paper or stone
            userWin= compChoice=="stone"? false: true;
        }
    showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");  // get the id of the choosed item
        //console.log("choice was made", userChoice);  //print
        playGame(userChoice);
    });
});