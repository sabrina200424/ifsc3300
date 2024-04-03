const getRandomNumber = () => {
    let random = null;
 
    // value >= 0.0 and < 1.0
    random = Math.random(); 

    // value is an integer between 0 and 5
    random = Math.floor(random * 6);

    
    random = random + 1;

    return random;
};

// Call the function to get a random number between 1 and 6
const randomNumber = getRandomNumber();

document.write(randomNumber);