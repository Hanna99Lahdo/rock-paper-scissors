const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scirssors"

const types = [ROCK, PAPER, SCISSORS]

let computerScore = 0;
let playerScore = 0 ;
let rounds = 0;

let getComputerChoice = () => types[Math.floor((Math.random() * 3))]

function displayScore (playerScore, computerScore){
    document.querySelector(".score").textContent = `Score: player ${playerScore} - computer ${computerScore}`;
}
function displayRound (rounds){
    document.querySelector(".round").textContent = `Round: ${rounds}`;
}

function playRound(playerSelection, computerSelection) {
    rounds++;
    
    switch (playerSelection) {

        case computerSelection:
            alert("Draw, No one wins!");
        break;

        case ROCK:

            if( computerSelection === PAPER){
                alert(`${PAPER} beats ${ROCK}, computer wins!`) ;
                computerScore++;
            }else if(computerSelection === SCISSORS){
                alert(`${ROCK} beats ${SCISSORS}, player wins!`);
                playerScore++;
            }else{
            alert("Error")
            } 
           displayScore(playerScore, computerScore);

        break;

        case PAPER:

            if(computerSelection === SCISSORS){
                alert(`${SCISSORS} beats ${PAPER}, computer wins!`);
                computerScore++;
            }else if( computerSelection === ROCK){
                alert(`${PAPER} beats ${ROCK}, player wins!`);
                playerScore++;
            }else{
            alert("Error")
            } 
            displayScore(playerScore, computerScore);

        break;
       
        case SCISSORS:
            
            if(computerSelection === ROCK ){
                alert(`${ROCK} beats ${SCISSORS}, computer wins!`);
                computerScore++;
            }else if(computerSelection === PAPER){
                alert(`${SCISSORS} beats ${PAPER}, player wins!`);
                playerScore++;
            }else{
                alert("Error")
            } 
            displayScore(playerScore, computerScore);

        break;
        
        default:
            endGame()
        break;
    }
    displayRound (rounds);
    rounds === 5 ? checkGame():null;
}

function endGame(){
    playerScore = 0;
    computerScore = 0;;
    rounds = 0;
    
    document.location.reload();
}

function checkGame(){
    displayRound (rounds);
    displayScore(playerScore, computerScore);
    if(rounds === 5 ){
        if(playerScore>computerScore) alert("Player Wins! Game will be reloaded");
        if(playerScore<computerScore) alert("Computer Wins! Game will be reloaded");
        if(playerScore === computerScore) alert("It's a tie! Game will be reloaded");
        endGame();
    }
}


document.querySelector(".play-game").addEventListener('click', function(){
    document.querySelector(".play-game").setAttribute("style", "visibility: hidden;")
    document.querySelector(".game-container").setAttribute("style", "visibility: visible;")
    displayScore(playerScore, computerScore);
    displayRound (rounds);
})

document.querySelector(".buttons-container").addEventListener('click', function(e){
    
    let ComputerChoice = getComputerChoice();
    let PlayerChoice;


    switch (e.target.id) {
        case 'rock':
            PlayerChoice = ROCK
        break;

        case 'paper':
            PlayerChoice = PAPER
        break;

        case 'scissors':
            PlayerChoice = SCISSORS
        break;
    
        default:
        break;
    }
    
    playRound(PlayerChoice, ComputerChoice);

})