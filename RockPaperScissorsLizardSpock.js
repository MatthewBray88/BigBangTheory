const game = document.querySelector('div');
const userImage = document.querySelector('#User > img');
const computerImage = document.querySelector('#Computer > img');
const userSpan = document.querySelector('#User > span');
const computerSpan = document.querySelector('#Computer > span');
const resultSpan = document.querySelector('#Result > span');
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
const lizard = document.querySelector('#Lizard');
const spock = document.querySelector('#Spock');

const geneValues = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
const imgValues = ['images/Rock.png', 'images/Paper.png', 'images/Scissors.png', 'images/Lizard.png', 'images/Spock.png'];
const imgWinner = ['images/RockWinner.png', 'images/PaperWinner.png', 'images/ScissorsWinner.png', 'images/LizardWinner.png', 'images/SpockWinner.png'];
const imgLoser = ['images/RockLoser.png', 'images/PaperLoser.png', 'images/ScissorsLoser.png', 'images/LizardLoser.png', 'images/SpockLoser.png'];

let wins = 0;
let ties = 0;
let loses = 0;

function userChoice (input) {
    let userInput = '';

    switch(input){        
        case rock:{
            userInput = geneValues[0];
            break;
        }
        case paper:{
            userInput = geneValues[1];
            break;
        }
        case scissors:{
            userInput = geneValues[2];
            break;
        }
        case lizard:{
            userInput = geneValues[3];
            break;
        }
        case spock:{
            userInput = geneValues[4];
            break;
        }
    }
    return userInput;
}

game.addEventListener('click', e =>{
    e.preventDefault();

    let randomNum = Math.floor(Math.random() * 5);
    let geneChoice = geneValues[randomNum];

        switch (userChoice(e.target)){
        case 'Rock':
            if(geneChoice === 'Scissors'|| geneChoice === 'Lizard'){
                userSpan.innerHTML = '<p id="Winner">You choose Rook</p>';
                userImage.setAttribute('src', `${imgWinner[0]}`);
                computerSpan.innerHTML = `<p id="Loser">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgLoser[randomNum]}`);
                wins++;
            } else if(geneChoice === 'Rock'){
                userSpan.innerHTML = '<p id="Tied">You choose Rock</p>';
                userImage.setAttribute('src', `${imgValues[0]}`);
                computerSpan.innerHTML = `<p id="Tied">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgValues[randomNum]}`);
                ties++;
            } else if(geneChoice === 'Paper' || geneChoice === 'Spock'){
                userSpan.innerHTML = '<p id="Loser">You choose Rock</p>';
                userImage.setAttribute('src', `${imgLoser[0]}`);
                computerSpan.innerHTML = `<p id="Winner">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgWinner[randomNum]}`);
                loses++;
            }
           break;
        case 'Paper':
            if(geneChoice === 'Rock'|| geneChoice === 'Spock'){
                userSpan.innerHTML = '<p id="Winner">You choose Paper</p>';
                userImage.setAttribute('src', `${imgWinner[1]}`);
                computerSpan.innerHTML = `<p id="Loser">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgLoser[randomNum]}`);
                wins++;
            } else if(geneChoice === 'Paper'){
                userSpan.innerHTML = '<p id="Tied">You choose Paper</p>';
                userImage.setAttribute('src', `${imgValues[1]}`);
                computerSpan.innerHTML = `<p id="Tied">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgValues[randomNum]}`);
                ties++;
            } else if(geneChoice === 'Scissors' || geneChoice === 'Lizard'){
                userSpan.innerHTML = '<p id="Loser">You choose Paper</p>';
                userImage.setAttribute('src', `${imgLoser[1]}`);
                computerSpan.innerHTML = `<p id="Winner">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgWinner[randomNum]}`);
                loses++;
            }
            break;
        case 'Scissors':
            if(geneChoice === 'Paper'|| geneChoice === 'Lizard'){
                userSpan.innerHTML = '<p id="Winner">You choose Scissors</p>';
                userImage.setAttribute('src', `${imgWinner[2]}`);            
                computerSpan.innerHTML = `<p id="Loser">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgLoser[randomNum]}`);
                wins++;
            } else if(geneChoice === 'Scissors'){
                userSpan.innerHTML = '<p id="Tied">You choose Scissors</p>';
                userImage.setAttribute('src', `${imgValues[2]}`);
                computerSpan.innerHTML = `<p id="Tied">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgValues[randomNum]}`);
                ties++;
            } else if(geneChoice === 'Rock' || geneChoice === 'Spock'){
                userSpan.innerHTML = '<p id="Loser">You choose Scissors</p>';
                userImage.setAttribute('src', `${imgLoser[2]}`);
                computerSpan.innerHTML = `<p id="Winner">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgWinner[randomNum]}`);
                loses++;
            }
            break;
        case 'Lizard':
            if(geneChoice === 'Paper'|| geneChoice === 'Spock'){
                userSpan.innerHTML = '<p id="Winner">You choose Lizard</p>';
                userImage.setAttribute('src', `${imgWinner[3]}`);            
                computerSpan.innerHTML = `<p id="Loser">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgLoser[randomNum]}`);
                wins++;
            } else if(geneChoice === 'Lizard'){
                userSpan.innerHTML = '<p id="Tied">You choose Lizard</p>';
                userImage.setAttribute('src', `${imgValues[3]}`);
                computerSpan.innerHTML = `<p id="Tied">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgValues[randomNum]}`);
                ties++;
            } else if(geneChoice === 'Rock' || geneChoice === 'Scissors'){
                userSpan.innerHTML = '<p id="Loser">You choose Lizard</p>';
                userImage.setAttribute('src', `${imgLoser[3]}`);
                computerSpan.innerHTML = `<p id="Winner">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgWinner[randomNum]}`);
                loses++;
            }
            break;
        case 'Spock':
            if(geneChoice === 'Rock'|| geneChoice === 'Scissors'){
                userSpan.innerHTML = '<p id="Winner">You choose Spock</p>';
                userImage.setAttribute('src', `${imgWinner[4]}`);            
                computerSpan.innerHTML = `<p id="Loser">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgLoser[randomNum]}`);
                wins++;
            } else if(geneChoice === 'Spock'){
                userSpan.innerHTML = '<p id="Tied">You choose Spock</p>';
                userImage.setAttribute('src', `${imgValues[4]}`);
                computerSpan.innerHTML = `<p id="Tied">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgValues[randomNum]}`);
                ties++;
            } else if(geneChoice === 'Paper' || geneChoice === 'Lizard'){
                userSpan.innerHTML = '<p id="Loser">You choose Spock</p>';
                userImage.setAttribute('src', `${imgLoser[4]}`);
                computerSpan.innerHTML = `<p id="Winner">Computer choose ${geneChoice}</p>`;
                computerImage.setAttribute('src', `${imgWinner[randomNum]}`);
                loses++;
            }
            break;
        }
    resultSpan.innerHTML = `<p>Wins: ${wins} Ties: ${ties} Loses: ${loses}</p>`;
});
