function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choice = choices[Math.floor(Math.random() * choices.length)];
}
function getPlayerSelection() {
    let playerSelection = prompt('Rock, Paper or Scissors?');
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase(); 
}
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return 'Tie! You both chose ' + computerSelection;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beat Paper!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beat Paper!';
    } else {
        return 'Wrong entry.';
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = playRound();
        if (roundResult === 'Tie! You both chose Paper') {
            alert('Tie! You both chose Paper!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Rock') {
            alert('Tie! You both chose Rock!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Scissors') {
            alert('Tie! You both chose Scissors!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'You lose! Paper beats Rock!') {
            alert('You lose! Paper beats Rock!');
            computerScore++;
        } else if (roundResult === 'You lose! Rock beats Scissors!') {
            alert('You lose! Rock beats Scissors!');
            computerScore++;
        } else if (roundResult === 'You lose! Scissors beat Paper!') {
            alert('You lose! Scissors beat Paper!');
            computerScore++;
        } else if (roundResult === 'You win! Paper beats Rock!') {
            alert('You win! Paper beats Rock!')
            playerScore++;
        } else if (roundResult === 'You win! Rock beats Scissors!') {
            alert('You win! Rock beats Scissors!')
            playerScore++;
        } else if (roundResult === 'You win! Scissors beat Paper!') {
            alert('You win! Scissors beat Paper!')
            playerScore++;
        } else if (roundResult === 'Wrong entry.') {
            alert('Wrong entry.');
        }
    alert('Player score = ' + playerScore + ' Computer score = ' + computerScore);
    roundResult = playRound();
    if (roundResult === 'Tie! You both chose Paper') {
            alert('Tie! You both chose Paper!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Rock') {
            alert('Tie! You both chose Rock!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Scissors') {
            alert('Tie! You both chose Scissors!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'You lose! Paper beats Rock!') {
            alert('You lose! Paper beats Rock!');
            computerScore++;
        } else if (roundResult === 'You lose! Rock beats Scissors!') {
            alert('You lose! Rock beats Scissors!');
            computerScore++;
        } else if (roundResult === 'You lose! Scissors beat Paper!') {
            alert('You lose! Scissors beat Paper!');
            computerScore++;
        } else if (roundResult === 'You win! Paper beats Rock!') {
            alert('You win! Paper beats Rock!')
            playerScore++;
        } else if (roundResult === 'You win! Rock beats Scissors!') {
            alert('You win! Rock beats Scissors!')
            playerScore++;
        } else if (roundResult === 'You win! Scissors beat Paper!') {
            alert('You win! Scissors beat Paper!')
            playerScore++;
        } else if (roundResult === 'Wrong entry.') {
            alert('Wrong entry.');
        }
        alert('Player score = ' + playerScore + ' Computer score = ' + computerScore);
    roundResult = playRound();
    if (roundResult === 'Tie! You both chose Paper') {
            alert('Tie! You both chose Paper!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Rock') {
            alert('Tie! You both chose Rock!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Scissors') {
            alert('Tie! You both chose Scissors!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'You lose! Paper beats Rock!') {
            alert('You lose! Paper beats Rock!');
            computerScore++;
        } else if (roundResult === 'You lose! Rock beats Scissors!') {
            alert('You lose! Rock beats Scissors!');
            computerScore++;
        } else if (roundResult === 'You lose! Scissors beat Paper!') {
            alert('You lose! Scissors beat Paper!');
            computerScore++;
        } else if (roundResult === 'You win! Paper beats Rock!') {
            alert('You win! Paper beats Rock!')
            playerScore++;
        } else if (roundResult === 'You win! Rock beats Scissors!') {
            alert('You win! Rock beats Scissors!')
            playerScore++;
        } else if (roundResult === 'You win! Scissors beat Paper!') {
            alert('You win! Scissors beat Paper!')
            playerScore++;
        } else if (roundResult === 'Wrong entry.') {
            alert('Wrong entry.');
        }
        alert('Player score = ' + playerScore + ' Computer score = ' + computerScore);
    roundResult = playRound();
    if (roundResult === 'Tie! You both chose Paper') {
            alert('Tie! You both chose Paper!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Rock') {
            alert('Tie! You both chose Rock!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Scissors') {
            alert('Tie! You both chose Scissors!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'You lose! Paper beats Rock!') {
            alert('You lose! Paper beats Rock!');
            computerScore++;
        } else if (roundResult === 'You lose! Rock beats Scissors!') {
            alert('You lose! Rock beats Scissors!');
            computerScore++;
        } else if (roundResult === 'You lose! Scissors beat Paper!') {
            alert('You lose! Scissors beat Paper!');
            computerScore++;
        } else if (roundResult === 'You win! Paper beats Rock!') {
            alert('You win! Paper beats Rock!')
            playerScore++;
        } else if (roundResult === 'You win! Rock beats Scissors!') {
            alert('You win! Rock beats Scissors!')
            playerScore++;
        } else if (roundResult === 'You win! Scissors beat Paper!') {
            alert('You win! Scissors beat Paper!')
            playerScore++;
        } else if (roundResult === 'Wrong entry.') {
            alert('Wrong entry.');
        }
        alert('Player score = ' + playerScore + ' Computer score = ' + computerScore);
    roundResult = playRound();
    if (roundResult === 'Tie! You both chose Paper') {
            alert('Tie! You both chose Paper!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Rock') {
            alert('Tie! You both chose Rock!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'Tie! You both chose Scissors') {
            alert('Tie! You both chose Scissors!');
            computerScore++;
            playerScore++;
        } else if (roundResult === 'You lose! Paper beats Rock!') {
            alert('You lose! Paper beats Rock!');
            computerScore++;
        } else if (roundResult === 'You lose! Rock beats Scissors!') {
            alert('You lose! Rock beats Scissors!');
            computerScore++;
        } else if (roundResult === 'You lose! Scissors beat Paper!') {
            alert('You lose! Scissors beat Paper!');
            computerScore++;
        } else if (roundResult === 'You win! Paper beats Rock!') {
            alert('You win! Paper beats Rock!')
            playerScore++;
        } else if (roundResult === 'You win! Rock beats Scissors!') {
            alert('You win! Rock beats Scissors!')
            playerScore++;
        } else if (roundResult === 'You win! Scissors beat Paper!') {
            alert('You win! Scissors beat Paper!')
            playerScore++;
        } else if (roundResult === 'Wrong entry.') {
            alert('Wrong entry.');
        }
        alert('Player score = ' + playerScore + ' Computer score = ' + computerScore);
}