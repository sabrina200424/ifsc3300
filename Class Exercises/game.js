const getRandomNumber = max => {
    let random = null;
 
    if (!isNaN(max)) {
        // value >= 1 and < 10
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