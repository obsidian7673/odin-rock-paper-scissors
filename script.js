let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
  }

  return choice;
}

let getHumanChoice = () => prompt('What do you want to throw?').toLowerCase();

let computerScore, humanScore = 0;

let playRound = (humanChoice, computerChoice) => {
  let result = '';
  switch (humanChoice) {
    case 'rock':
      switch (computerChoice) {
        case 'rock':
          result = handleResult('tie', humanChoice, computerChoice);
          break;
        case 'paper':
          result = handleResult('lose', humanChoice, computerChoice);
          break;
        case 'scissors':
          result = handleResult('win', humanChoice, computerChoice);
          break;
      }
    case 'paper':
      switch (computerChoice) {
        case 'rock':
          result = handleResult('win', humanChoice, computerChoice);
          break;
        case 'paper':
          result = handleResult('tie', humanChoice, computerChoice);
          break;
        case 'scissors':
          result = handleResult('lose', humanChoice, computerChoice);
          break;
      }
    case 'scissors':
      switch (computerChoice) {
        case 'rock':
          result = handleResult('lose', humanChoice, computerChoice);
          break;
        case 'paper':
          result = handleResult('win', humanChoice, computerChoice);
          break;
        case 'scissors':
          result = handleResult('tie', humanChoice, computerChoice);
          break;
      }
  }

  const resultDiv = document.querySelector('.result');
  resultDiv.innerText = result;
}

let handleResult = (result, humanChoice, computerChoice) => {
  switch (result) {
    case 'win':
      humanScore++;
      return `you win! ${humanChoice} beats ${computerChoice}`;
    case 'lose':
      computerScore++;
      return `you lose! ${humanChoice} loses to ${computerChoice}`;
    case 'tie':
      return `tie! ${humanChoice} ties ${computerChoice}`;
  }
}

window.onload = () => {
  const rpsOptions = document.querySelector('.rps-options');

  rpsOptions.addEventListener('click', (event) => playRound(event.target.textContent, getComputerChoice()));
}
