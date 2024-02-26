"use strict";

const calculateFV = (investment, interestRate, years) => {

    const rate = interestRate / 100;
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
    futureValue = futureValue + (futureValue * rate / 100);
}
return futureValue.toFixed(2) 
//makes decimal part 2 place

}; 


// display results
//document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
//document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
//document.write(`<p><label>Years:</label> ${years}</p>`);
//document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);

//---------------------------------------------------------------------------------

const processEntries = () => {


    if (isNaN(investment) || investment <= 0 || investment > 100000) {
        errorMessage = 'Investment must be a number greater than zero and less than or equal to 100,000.';
    }



}