"use strict";

const calculateFV = (investment, interestRate, years) => {

    const rate = interestRate / 100;
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
    futureValue = futureValue + (futureValue * rate / 100);
}
return futureValue.toFixed(2) 
//$("#mpg").value = (miles / gallons).toFixed(2);

//document.$("futureValue").value = (miles / gallons).toFixed(2)
//makes decimal part 2 places

}; 


// display results
//document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
//document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
//document.write(`<p><label>Years:</label> ${years}</p>`);
//document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);

//---------------------------------------------------------------------------------


const processEntries = () => {
    
        $("#calculate").addEventListener("click", evt => {
            // get values user entered in textboxes
            const investment = parseFloat($("#investment").value);
            const interestRate = parseFloat($("#interestRate").value);
            const years = parseFloat($("#years").value);
            //const futureValue = parseFloat($("#futureValue").value);

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

    //if (errorMessage == '') {
     //   const futureValue = calculateFV(investment, interestRate, years);
      //  $("#futureValue").value = futureValue + (futureValue * rate / 100).toFixed(2);
   // } else {
        // Display error message
        //alert(errorMessage);
   // }
   const futureValue = calculateFV(investment, interestRate, years);
   $("#futureValue").value = futureValue + (futureValue * rate / 100).toFixed(2);
   
   //document.addEventListener("DOMContentLoaded", () => {
  //  $("#calculate").addEventListener(
  //      "click", processEntries);
   // $("#investment").focus();

})};

document.addEventListener("DOMContentLoaded", () => {})