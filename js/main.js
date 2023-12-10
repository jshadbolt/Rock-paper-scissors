
let rock = document.querySelector('.rock-button')
let paper = document.querySelector('.paper-button')
let scissors = document.querySelector('.scissors-button')

let playerScore = 0
let computerScore = 0

const playerScore_span = document.getElementById('player-span')
const computerScore_span = document.getElementById('computer-span')

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getComputerChoice() {
    let num = randomNum(0, 2)
    let choices = ['r', 'p', 's']
    return choices[num]
}

function win() {
    playerScore++
    playerScore_span.textContent = playerScore
    console.log('PLAYER WINS')
}

function lose() {
    computerScore++
    computerScore_span.textContent = computerScore
    console.log('COMPUTER WINS')
}

function tie() {
    console.log('IT WAS A TIE')
}


function decideWinner(playerChoice, computerChoice) {
    console.log(`player chose ${playerChoice}, computer chose ${computerChoice}`)
    switch (playerChoice + computerChoice) { //player wins
        case 'rs':
        case 'pr':
        case 'sp':
            win()
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose()
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            tie()
            break;
    }
}

function playRound(playerChoice)  {
    let computerChoice = getComputerChoice();
    decideWinner(playerChoice, computerChoice)
}


function main() {
    rock.addEventListener('click', () => {
        playRound('r')
    })
    paper.addEventListener('click', () => {
        playRound('p')
    })
    scissors.addEventListener('click', () => {
        playRound('s')
    })
}

function playRounds() {

}

main();