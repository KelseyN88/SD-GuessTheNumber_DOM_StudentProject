/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/
// guesses = []
const minNumber = 0
const maxNumber = 100
//when i run this using number to guess it says numberToGuess has already been declared in line 1 of my script


function randomNumber(userGuess, computersNumber)  {


        //starts the base for guesses
        let guesses = 0

        // const computersNumber = getRandInt(minNumber, maxNumber)
      
        while (userGuess !== numberToGuess) {
        
          //if the guess is either less than the min OR larger than the max numbers 0 || 100 its not in range
          if (userGuess < minNumber || userGuess > maxNumber) {
            return `Whopsie, that number is not in range. Try again`

          } else if (userGuess < numberToGuess) {
            return `${userGuess} is too low, guess higher!`

            

          } else if (userGuess > numberToGuess) {
            return `${userGuess} is too high, guess lower!`
            

          } else {
            return `Congrats! You win. It was ${numberToGuess}.`
            
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

  //variables
  let computerGuess = 0
  let minNum = 0
  let maxNum = 100
  let maxTry = 20
  let guessCount = 0

function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
  // num generates a random number
  // build logic to get a random number - after num



}

function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th logic and response.

    This should return a string indicating the computers response.
    */
 

  return reply
}

