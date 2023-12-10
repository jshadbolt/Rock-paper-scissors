
let rock = document.querySelector('.rock-button')
let paper = document.querySelector('.paper-button')
let scissors = document.querySelector('.scissors-button')
const playBtn = document.getElementById('play-button')
const maxPoints = document.getElementById('max-points')

const playerScore_span = document.getElementById('player-span')
const computerScore_span = document.getElementById('computer-span')

let playerScore = 0
let computerScore = 0
let winner = 'none'

//when max amount reached, remove the click listener for each

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
    ++playerScore
    playerScore_span.textContent = playerScore
    console.log('PLAYER WINS')
}

function lose() {
    ++computerScore
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

function pauseScores() {

}

function resetPoints() {
    playerScore = 0
    playerScore_span.textContent = 0
    computerScore = 0
    computerScore_span.textContent = 0
}

function showPlayButton() {
    playBtn.classList.remove('hide-play-button')
    playBtn.textContent = 'Play Again?'
}


function declareWinner(winner) {
    showPlayButton();
    console.log(`max points reached, ${winner} wins!`)
    playBtn.addEventListener('click', () => {
    resetPoints()
    })   
}

function pointsToWin(amount) {
    if (playerScore === amount) {
        winner = 'player'
        declareWinner(winner)
    }
    if (computerScore === amount) {
    winner = 'computer'
    declareWinner(winner)
    }
}

function playRound(playerChoice, winningScore)  {
    let computerChoice = getComputerChoice();
    decideWinner(playerChoice, computerChoice)
    pointsToWin(winningScore)
}

function games(amount) {
    playBtn.classList.add('hide-play-button')
    rock.addEventListener('click', () => {
        playRound('r', amount)
    })
    paper.addEventListener('click', () => {
        playRound('p', amount)
    })
    scissors.addEventListener('click', () => {
        playRound('s', amount)
    })
}

let defaultAmount = 3

function createDefaultAmount(value, defaultAmount) {
   return value === 0 ? defaultAmount : value
}

playBtn.addEventListener('click', () => {
    let gameAmount = createDefaultAmount(+maxPoints.value, defaultAmount)
    console.log(gameAmount)
    games(gameAmount)
})

//on play button => reset scores,
//on gameend => show play button