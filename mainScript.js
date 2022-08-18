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

// BASE FUNCTION FOR USER INPUT ACCEPTANCE 
// function gameRounds() {
//   const baseRounds = 5;
//   let counter = 0;
//   let userInput;
//   let collectionInputs = [];

//   while (counter < baseRounds) {
//     userInput = parseInt(prompt(`input value: `))
//     collectionInputs.push(userInput)
//     counter++;
//   }

//   console.log(`OUTSIDE OF LOOP TEST ${userInput}`);
//   console.table(collectionInputs);
// }


// function userInput() {
//   let input 
// }
