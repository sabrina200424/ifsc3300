const getRandomNumber = max => {
    let random = null;
 
    if (!isNaN(max)) {
        // value >= 0.0 and < 1.0
        random = Math.random(); 
 
        // value is an integer between 0 and max - 1
        random = Math.floor(random * max);
 
        // value is an integer between 1 and max
        random = random + 1;
    }
    // if max is not a number, will return null
    return random;
};
document.write(html);