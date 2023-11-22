// Paper scissors rock

// Create:
// Variable R
// Variable P
// Variable S

// Set variable values to be:
// Rock is > scissors, scissors is > paper, paper is > Rock. 

// Computer chooses rock, paper or scissors
// Player inputs rock, paper or scissors (case insensitive)

// If player choice is beaten by computer choice, computer gains a point
// Losing message displayed
// If player choice wins against computer choice, player gains point
// Winning message displayed
// Add to score tally

// When 5 rounds have been played, declare the winner.
// Then reset game.

function getComputerChoice() {
    function getRandomNum() {
        return Math.floor(Math.random() * (4 - 1) + 1);
    }

    if (getRandomNum() == 1) {
        return 'rock';
    } else if (getRandomNum() == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let input = prompt('Rock paper or scissors?');
    input = input.toLowerCase();

    if (input == 'rock') {
        return 'rock';
    } else if (input == 'paper') {
        return 'paper';
    } else if (input == 'scissors') {
        return 'scissors';
    }
}

function getWinner(player, computer) {
//each comparison is made, 'tie' covers the final three possibilities.
if (player === 'rock' && computer === 'paper') {
    return 'computer';
} else if (player === 'rock' && computer === 'scissors') {
    return 'player';
}  else if (player === 'paper' && computer === 'scissors') {
    return 'computer';
} else if (player === 'paper' && computer === 'rock') {
    return 'player';
} else if (player === 'scissors' && computer === 'rock') {
    return 'computer';
}  else if (player === 'scissors' && computer === 'paper') {
    return 'player';
} else {
    return 'none';
}
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

let result = getWinner(playerSelection, computerSelection);

// function scoreCount {
//     for (let i = 0; i < 5; i++) {
//         result == player ? 
//     }
// }

// let playerScore = 0

// let computerScore = 0pa

console.log ('computer chose ' + computerSelection);
console.log ('you chose ' + playerSelection);
console.log(result + ' wins');



