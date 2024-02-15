let again = "y";

do {
    const miles = parseFloat(prompt("Enter miles driven"));
    const gallons = parseFloat(prompt("Enter gallons of gas used"));

    if (miles > 0 && gallons > 0) {
        const mpg = parseFloat(miles/gallons);

        const html = `<p>${miles} miles on ${gallons} 
                      gallons = ${mpg.toFixed(2)} MPG</p>`;
        document.write(html);
    } 
    else {
        alert("One or both entries are invalid");
    }
 
    do {
        again = prompt("Repeat entries? (y/n)").toLowerCase();
        
        // Check if the input is neither 'y' nor 'n'
        if (again !== 'y' && again !== 'n') {
            alert("Invalid input. Please enter 'y' or 'n'");
        }
    } while (again !== 'y' && again !== 'n');

} while (again !== 'n');





//if (again !== 'y' && again !== 'n') {
    //alert("Invalid input. Please enter 'y' or 'n'.");
//}

//while (again !== 'y' && again !== 'n') {
   // again = prompt("Invalid input. Please enter 'y' or 'n'").toLowerCase();
//}
    
    
//while (again == "y");
