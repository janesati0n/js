/* //num generator 1-10
Math.floor(Math.random() * 10 + 1) */

//Guessing Game
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
/* console.log(targetNum) */
let attempts = 1;

let guess = prompt("Enter your first guess!");
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    }
    else {
        guess = prompt("Too low! Enter a new guess:")
    }
}
if (guess === 'q') {
    console.log("OK, you quit!")
} else {
    console.log("Congrats, you got it!")
    console.log(`My target number was ${targetNum}. It took you ${attempts} guesses.`)
}
