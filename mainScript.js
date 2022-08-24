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

  // console.log(computerChoice);

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

    // console.log(stringValidation);

    return stringValidation;

  } else {

    // console.log(`incorrect input!`);

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

  // CALLING THE INPUT COMPARISON FUNCTION TO VALIDATE THE INPUT AND PROVIDE A WINNER!
  let gameResult = inputComparison(userResult, computerResult);

  // console.log(`game function user input: ${userResult} \n computer choice: ${computerResult}`);

  // console.log(`the game winner is ${gameResult} ------------------- user choice: ${userResult} ------------------- computer choice ${computerResult}`);
  return `the game winner is ${gameResult} ------------------- user choice: ${userResult} ------------------- computer choice ${computerResult}`;
}

/*
  The function validates the winner by the usage of inputs collection, such checks the winner by 
  comparison of inputs string content, and passes the results via return statement. 
*/


function inputComparison(user, computer) {

  let computerValidator = computer.toLowerCase();
  let userValidator = user.toLowerCase();
  let winnerDefinition = ``;

  // Validation of user input to be within the range of - paper, scissors and rock.

  if (userValidator == `rock` || userValidator == `paper` || userValidator == `scissors`) {
    // console.log(`output of input ${computerValidator} and ${userValidator}`);

    if (userValidator == `rock` && computerValidator == `scissors`) {
      // return `user has won!`;
      winnerDefinition += `user has won!`;
    }

    if (userValidator == `scissors` && computerValidator == `paper`) {
      // return `user has won!`;
      winnerDefinition += `user has won!`;
    }

    if (userValidator == `paper` && computerValidator == `rock`) {
      // return `user has won`;
      winnerDefinition += `user has won!`;
    }

    if (computerValidator == userValidator) {
      winnerDefinition += `game draw!`
    }

    return winnerDefinition || `computer has won!`
  }
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