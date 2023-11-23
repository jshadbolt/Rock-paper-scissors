//gets computer to randomly choose of the 3 choices.
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

//gets the players choice and un-capitalises their input.
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

//decides who won
function getWinner(player, computer) {
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
    //this covers the final three 'tie' possibilities

}
}

//holds the playerscore, the computer score, and tie score
let playerScore = 0;
let computerScore = 0;
let tie = 0;

function getResults() {
    //holds what computer picked, what player picked, compare the two and declare who won (or tie).
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let winner = getWinner(playerSelection, computerSelection);


    //prints what computer chose, what player chose, and who the winner is
    console.log('Computer chose: ' + computerSelection);
    console.log('Player chose: ' + playerSelection);
    console.log(winner.toUpperCase() + ' WINS!');

    //prints player score, computer score, tie score. 
    function scoreboard() {
        console.log('               SCOREBOARD: ')

        if (winner === 'player') {
            ++playerScore;
        } else if (winner === 'computer') {
            ++computerScore;
        } else {
            ++tie;
        }

        console.log('Player: ' + playerScore)
        console.log('Computer: ' + computerScore)
        console.log('Tie: ' + tie)
    }
    scoreboard()
}


function game(numberToWin) {
    alert(`Guide:
    -Open Console (cmd + option + j)
    -Reload the page
            THEN to actually play:
    -Type 'rock' 'paper' or 'scissors'
    -Score 3 points to win`)

//plays 5 rounds.
for (let i = 1; i < 50; ++i) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log('ROUND: ' + i)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    getResults();
    
//checks to see if either player has scored 3 points, resets game if so, otherwise prompts for next round. 
    if (playerScore === numberToWin) {
        console.log('                           GAME OVER: Player Won!')
        alert('Play again?')
        console.clear()
        playerScore = 0;
        computerScore = 0;
        tie = 0;
        i = 0
    } else if (computerScore === numberToWin) {
        console.log('                           GAME OVER: Computer won!')
        alert('Play again?')
        console.clear()
        playerScore = 0;
        computerScore = 0;
        tie = 0;
        i = 0;
    } else {
        alert('Next Round?');
        console.clear()
    }
    }
}


//runs the game (score to win)
game(3);



