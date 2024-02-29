"use strict";
const $ = selector => document.querySelector(selector);


    



const calculateFV = (investment, interestRate, years) => {

    const rate = interestRate / 100;
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue = futureValue + (futureValue * rate / 100);
}
    return futureValue.toFixed(2);
}; 




const processEntries = () => {
    
   // $("#calculate").addEventListener("click", evt => {
        // get values user entered in textboxes
        const investment = parseFloat($("#investment").value);
        const interestRate = parseFloat($("#interestRate").value);
        const years = parseFloat($("#years").value);
        

    let errorMessage = "";

    if (isNaN(investment) && investment <= 0 && investment > 100000) {
        errorMessage = 'Investment must be a number greater than zero and less than or equal to 100,000.';
    }
    if (isNaN(interestRate) && interestRate <= 0 && interestRate > 15) {
        errorMessage = 'Investment must be a number greater than zero and less than or equal to 15.';
    }
    if (isNaN(years) && years <= 0 && years > 50) {
    errorMessage = 'Years must be a number greater than zero and less than or equal to 50.';
    }

   
    if (errorMessage == '') {
       const futureValue = calculateFV(investment, interestRate, years);
        $("#futureValue").value = futureValue + (futureValue * rate / 100).toFixed(2);
    } else {
        //Display error message
        alert(errorMessage);
    };

   
};


document.addEventListener("DOMContentLoaded", () => {
    $("#futureValue").value = futureValue + (futureValue * rate / 100).toFixed(2);
    $("#calculate").addEventListener("click", processEntries);
});