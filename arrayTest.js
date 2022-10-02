`use strict`;

// TEST ARRAYS STORING TEST DATA AKA FRUITS!

let fruits = [`grapes`, `oranges`, `berry's`, `bananas`, `pineapple`, `apples`];

/*
            HELPER EXPRESSIONS!
  ES6 METHOD TO OUTPUT/LOOP THROUGH ARRAY!
 */

let displayArray = (message, ...input) => {
  for (let x = 0; x < input.length; x++) {
    console.log(`\nCustom Message:\t ${message}\n`);
    console.log(input[x]);
    console.log(`\n`);
  }
}

/*
            HELPER EXPRESSIONS!
  ES6 METHOD TO ADD VALUES TO ARRAY VIA PROMPT FUNCTION!
 */

let collectArrayInput = () => {

  userCollectionData = [];

  for (let x = 0; x < 6; x++) {
    let inputInstance = prompt(`Insert favorite colors!`);
    console.log(inputInstance);
    userCollectionData.push(inputInstance);
  }

  return userCollectionData;
  console.table(userCollectionData);
}

/*
            HELPER EXPRESSIONS!
  SECTION BRAKIER, SEPARATES CONTENT IN CLI WHEN USING NODE!
 */

let contentBrakier = (message) => {
  console.log(`\nNew Section - ${message}\n`);
}


// INVOKING FUNCTION FOR TESTING PRE_SET ARRAY

displayArray(`Default array!`, fruits);

// REMOVING LAST ELEMENT FROM ARRAY 

fruits.pop();
displayArray(`Usage of POP method!`, fruits);

// ADDING INTO THE ARRAY, LAST ELEMENT!

fruits.push(`cherry's`);
displayArray(`Usage of PUSH method!`, fruits);

// ADDING INTO THE ARRAY, THE FIRST ELEMENT!

fruits.unshift(`mangos'`);
displayArray(`Usage of UNSHIFT method!`, fruits);

// REMOVING THE FIRST ELEMENT FROM THE ARRAY! 

fruits.shift();
displayArray(`Usage of the SHIFT method`, fruits);

// ADDING ARRAY ELEMENT TO THE DESIRED INDEX USING THE SPLICE METHOD!

fruits.splice(3, 0, `dragon fruit`);
displayArray(`Usage of the SPLICE method`, fruits);

// REMOVING DESIRED ARRAY ELEMENT USING HTE SLICE METHOD! SUCH REQUIRES THE COMPOSITION OF NEW/COPY ARRAY 

const testArray = fruits.slice(1);
displayArray(`Usage of the SLICE METHOD`, testArray);

console.table(testArray);

/*
            TESTING EXAMPLES!
  UTILIZED THE W3SCHOOLS FOR EXAMPLES OF USAGE! 
  TESTING THE METHOD LENGTH FUNCTION TO APPEND THE ARRAY!
 */

fruits[fruits.length] = `test`;

console.table(fruits);


/* 
            TESTING EXAMPLES - MAP AND FILTER!
  UTILIZING THE ES6 FUNCTIONALITY OF THE MAP AND FILTER METHOD/FUNCTIONS
*/

contentBrakier(`USAGE OF THE MAP AND FILTER EXPRESSIONS!`);

// HARD LESSON TO THE RETURN STATEMENT DOES NOT SHOW IN CLI HOWEVER THE OUTPUT OF FUNCTION CAN BE ASSIGNED TO VARIABLE! 
// FOR INSTANCE SHOW OR DEBUGGING UTILIZE THE CONSOLE.LOG() FUNCTION!!!! 

function textUpperCase(input) {
  return input.toUpperCase();
}

let testExpression = (input) => {
  return input.toUpperCase();
}

let arrayToUpperCase = fruits.map(testExpression);

console.log(arrayToUpperCase);
