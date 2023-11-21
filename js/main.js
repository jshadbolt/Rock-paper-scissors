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
    } else {
        return 'invalid';
    }
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function winner(computer, player) {
    
}


// console.log ('computer chose ' + computerSelection);
// console.log ('you chose ' + playerSelection);

