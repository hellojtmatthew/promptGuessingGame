let maximum = parseInt(prompt("Enter a number: "));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess: "));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess === 'q') break;
    if (guess > targetNum) {
        guess = (prompt("Your guess is too high, please try again: "));
    } else {
        guess = (prompt("Your guess is too low, please try again: "));
    }
}
if (guess === 'q') {
    console.log("Quitting the game")
} else {
    console.log(`You guessed correctly! It took you ${attempts} guesses`)
}

