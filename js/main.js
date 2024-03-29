const rock = document.querySelector('.rock-button');
const paper = document.querySelector('.paper-button');
const scissors = document.querySelector('.scissors-button');
const gameOptions = document.querySelector('.game-options')
const playBtn = document.getElementById('play-button');
const userMaxPoints = document.getElementById('max-points');
const playerScoreSpan = document.getElementById('player-span');
const computerScoreSpan = document.getElementById('computer-span');
const playerWrapper = document.querySelector('.player-icon-wrapper');
const computerWrapper = document.querySelector('.computer-icon-wrapper');
const computerEmoji = document.querySelector('.computer-emoji');
const playerEmoji = document.querySelector('.player-emoji');

const glowDuration = 500;
const bubbleDuration = glowDuration;
const rockEmoji = '&#128074'
const paperEmoji = '👋'
const scissorsEmoji = '&#9996'

let playerScore = 0;
let computerScore = 0;
let maxPoints = 3;
let gameStarted = false;
let gameEnded = false;

playerEmoji.classList.add('hide-emoji')
computerEmoji.classList.add('hide-emoji')


function getRandomChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    disableChoices(true);
    gameStarted = false;
    gameEnded = false;
}

function playRound(playerChoice) {
    if (!gameStarted || gameEnded) return;
    const computerChoice = getRandomChoice();
    decideWinner(playerChoice, computerChoice);
    changeEmojiDisplay(playerChoice, computerChoice)
    updateScores();
    checkGameEnd();
}


function changeEmojiDisplay(playerChoice, computerChoice) {
    computerEmoji.classList.remove('losing-emoji')
    playerEmoji.classList.remove('losing-emoji')
    computerEmoji.classList.add('show-emoji');
    playerEmoji.classList.add('show-emoji');   
    switch (playerChoice) {
        case 'r':
            playerEmoji.innerHTML = rockEmoji
            break
        case 'p':
            playerEmoji.innerHTML = paperEmoji
            break
        case 's':
            playerEmoji.innerHTML = scissorsEmoji
    }
    switch (computerChoice) {
        case 'r':
            computerEmoji.innerHTML = rockEmoji
            break
        case 'p':
            computerEmoji.innerHTML = paperEmoji
            break
        case 's':
            computerEmoji.innerHTML = scissorsEmoji
    }
    setTimeout( () => {
        computerEmoji.classList.add('losing-emoji')
        playerEmoji.classList.add('losing-emoji')
    }, '1000');
}

function decideWinner(playerChoice, computerChoice) {
    const result = playerChoice + computerChoice;
    let winner = ''
    let loser = ''
    if (result === 'rs' || result === 'pr' || result === 'sp') {
        playerScore++;
        winner = 'player'
        loser = 'computer'
    } else if (result === 'rp' || result === 'ps' || result === 'sr') {
        computerScore++;
        winner = 'computer'
        loser = 'player'
    } else {
        winner = 'tie'
    }
    // glowEffect(winner)
}

function greenGlow(targetDiv) {
    targetDiv.classList.add('green-glow')
    setTimeout(() => {
        targetDiv.classList.remove('green-glow')
    }, glowDuration )
}

function redGlow(targetDiv) {
    targetDiv.classList.add('red-glow')
    setTimeout(() => {
        targetDiv.classList.remove('red-glow')
    }, glowDuration )
}

function grayGlow(targetDiv1, targetDiv2) {
    targetDiv1.classList.add('gray-glow')
    setTimeout(() => {
        targetDiv1.classList.remove('gray-glow')
    }, glowDuration )
    targetDiv2.classList.add('gray-glow')
    setTimeout(() => {
        targetDiv2.classList.remove('gray-glow')
    }, glowDuration )
}

function glowEffect(winner) {
    switch (winner) {
        case 'player':
            greenGlow(playerWrapper)
            redGlow(computerWrapper)
            break;
        case 'computer':
            greenGlow(computerWrapper)
            redGlow(playerWrapper)
            break;
        case 'tie':
            grayGlow(playerWrapper, computerWrapper)
    }
}

function updateScores() {
    playerScoreSpan.textContent = playerScore.toString();
    computerScoreSpan.textContent = computerScore.toString();
}

function checkGameEnd() {
    if (playerScore === maxPoints || computerScore === maxPoints) {
        disableChoices(true);
        const gameWinner = playerScore === maxPoints ? 'Player' : 'Computer';
        console.log(`Max points reached, ${gameWinner} wins!`);
        showControls();
        gameEnded = true;
    }
}

function disableChoices(disabled) {
    rock.disabled = disabled;
    paper.disabled = disabled;
    scissors.disabled = disabled;
}

function showControls() {
    playBtn.textContent = 'Play Again?';
    playBtn.classList.add('play-button-show');
    playBtn.classList.remove('play-button-hide');

    gameOptions.classList.add('game-options-show')
    gameOptions.classList.remove('game-options-hide')
}

function hidePlayButton() {
    playBtn.classList.add('play-button-hide');
    gameOptions.classList.add('game-options-hide')
}

playBtn.addEventListener('click', () => {
    console.clear()
    resetGame();
    hidePlayButton();
    disableChoices(false);
    maxPoints = parseInt(userMaxPoints.value) || 3;
    gameStarted = true;
});

rock.addEventListener('click', () => {
    playRound('r');
});

paper.addEventListener('click', () => {
    playRound('p');
});

scissors.addEventListener('click', () => {
    playRound('s');
});

disableChoices(true); // Initially disable choices
