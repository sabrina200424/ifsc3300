"use strict";

const scores = [];

// use do-while loop to get the scores from the user
let score = 0;
do {
    score = parseInt(
        prompt("Enter a test score, or enter -1 to end scores", -1));

    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must by a valid number from 0 through 100");
    }
}
while(score != -1);

if (scores.length > 0) {
    // make sure to add in for loop
    let total = 0;
    for (let i in scores) {
        total = total + scores[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }

    //calculate and display the average
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}

function highestScore(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Please provide a non-empty array of numbers.";
    }

    let highest = numbers[0]; // First number is the highest number

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i]; // Update larger number
        }
    }
     return highest;
}
 const highestNumber = highestScore(scores); 
document.write(`<p>Highest score is ${highestNumber}</p>`);

    //const part has to be outside of the function to get it working
// set a different variable for different sides of the equation (example no. 47)