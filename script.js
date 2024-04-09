const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scirssors"

const types = [ROCK, PAPER, SCISSORS]

const getComputerChoice = () => types[Math.floor((Math.random() * 3))]

let getPlayerChoice = prompt("What's your choice").toLowerCase()

while(! types.includes(getPlayerChoice) )
{
    getPlayerChoice = prompt("please eneter a valild case either rock, paper or scirssors").toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    // playerSelection === computerSelection ? alert("Draw, No one wins!") : null;

    switch (playerSelection) {
        case computerSelection:
            alert("Draw, No one wins!");
        break;
        case ROCK:
            computerSelection === PAPER ? 
                alert(`${PAPER} beats ${ROCK}, computer wins!`) : 
                computerSelection === SCISSORS ? 
                alert(`${ROCK} beats ${SCISSORS}, player wins!`) : null
        break;
        case PAPER:
            computerSelection === SCISSORS ? 
                alert(`${SCISSORS} beats ${PAPER}, computer wins!`) : 
                computerSelection === ROCK ? 
                alert(`${PAPER} beats ${ROCK}, player wins!`) : null
        break;
        case SCISSORS:
            computerSelection === ROCK ? 
                alert(`${ROCK} beats ${SCISSORS}, computer wins!`) : 
                computerSelection === PAPER ? 
                alert(`${SCISSORS} beats ${PAPER}, player wins!`) : null
        break;
        default:
            alert("Error")
        break;
    }

}

playRound(getPlayerChoice, getComputerChoice())  