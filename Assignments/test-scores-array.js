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
    // use a for-in loop to add each score to total, and display score
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

    let highest = numbers[0]; // Assume the first number is the highest

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i]; // Update highest if a higher number is found
        }
        const highestScore = findHighestNumber(scores);
        document.write(`<p>Highest score is ${highestScore}</p>`);
    }

    return highest;
}
document.write(html);
    
