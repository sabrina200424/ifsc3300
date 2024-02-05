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
 
    again = prompt("Repeat entries? (y/n)", "y");
    }
    //while (again != "y" && again != "n")
        //alert("Invalid message")
    
while (again == "y");
