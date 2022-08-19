"use strict"

// BASE FUNCTION FOR COMPUTER SELECTION
function getComputerChoice() {

  let computerChoice = ``;
  let stringValidation = ``;

  let randomVal = Math.floor(Math.random() * 3);

  switch (randomVal) {
    case 0:
      computerChoice += `scissors`;
      break;
    case 1:
      computerChoice += `rock`;
      break;
    case 2:
      computerChoice += `paper`;
      break;
    default:
      console.log(`error out of range parameter!`);
      break;
  }

  stringValidation = computerChoice.toLowerCase();

  console.log(computerChoice);
  return stringValidation;

}

// BASE FUNCTION FOR USER SELECTION
function userInput() {

  let input = ` `;
  let stringValidation;

  console.log(`Select from: scissors, paper and rock! `);
  input = prompt(`Please enter value from the following selection:`);

  if (input.length > 1) {

    stringValidation = input.toLowerCase();
    console.log(stringValidation);

    return stringValidation;

  } else {
    console.log(`incorrect input!`);
    return `incorrect input!`
  }
}

/* 
  THE FUNCTION WILL CALL @userInput and @getComputerChoice to enable the player 
  to play 5 rounds of the game.
*/

function winnerCheck() {

  let userResult = userInput();
  let computerResult = getComputerChoice();
  console.log(`game function user input: ${userResult} \n computer choice: ${computerResult}`);
  
}




/* BASE FUNCTION FOR USER INPUT ACCEPTANCE
function gameRounds() {
  const baseRounds = 5;
  let counter = 0;
  let userInput;
  let collectionInputs = [];
 
  while (counter < baseRounds) {
    userInput = parseInt(prompt(`input value: `))
    collectionInputs.push(userInput)
    counter++;
  }
 
  console.log(`OUTSIDE OF LOOP TEST ${userInput}`);
  console.table(collectionInputs);
}
*/