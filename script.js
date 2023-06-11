/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/
const minNumber = 0;
const maxNumber = 100;
let guesses = 0;

function randomNumber(userGuess, computersNumber) {

  while (userGuess !== numberToGuess) {
    //if the guess is either less than the min OR larger than the max numbers 0 || 100 its not in range
    if (userGuess < minNumber || userGuess > maxNumber) {
      return `Whoopsie, that number is not in range. Try again`;
    } else if (userGuess < numberToGuess) {
      guesses = guesses + 1
      return `${userGuess} is too low, guess higher!`;
    } else if (userGuess > numberToGuess) {
      guesses = guesses + 1
      return `${userGuess} is too high, guess lower!`;
    } else {
      return `Congrats! You win. It was ${numberToGuess}. You took ${guesses} guesses.`;
    }
  }
}

// YOUR CODE ABOVE

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess(num) {
  // This should return a string that denotes the first guessed number
  // YOUR CODE ...
  return `is your secrect number ${num}?`;
}

//variables
let minNum = 0;
let maxNum = 100;
let maxTry = 7;
let guessCount = 0;
let computerGuess = 0;

function compGuess(reply) {
  /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating the logic and response.

    This should return a string indicating the computers response.
    */
  while (guessCount < maxTry) {
    let computerGuess = startCompGuess(minNum, maxNum);
    let midNum = Math.floor((minNum + maxNum) / 2);

    if (reply === "lower") {
      // lower
      maxNum = midNum--;
      computerGuess = Math.floor((maxNum + minNum) / 2);
      guessCount = guessCount + 1;
      return (reply = `is your secret ${computerGuess}?`);
    } else if (reply === "higher") {
      // higher
      minNum = midNum++;
      computerGuess = Math.floor((maxNum + minNum) / 2);
      guessCount = guessCount + 1;
      return (reply = `is your secret ${computerGuess}?`);
    } else {
      let reply = `Winner, Winner! That took ${guessCount} guesses!`;
      return reply;
    }
  }
  return `Whoops, I ran out of guesses! Better luck next time`;
}
