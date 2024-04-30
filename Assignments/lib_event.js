"use strict";

$(document).ready( () => {

    $("#countdown").click( () => {
        const event = new Event( $("#event").val(), $("#date").val() );

       
        if (validation.isEmpty(event.name) || 
            validation.isEmpty(event.dateString)) {
            $("#message").text("Please enter both a name and a date.");
            return;
        }

        //is empty has no slashes, etc. 
       
        if (validation.hasNoSlashes(event.dateString) ||
            validation.isInvalidYear(event.dateString) ||
            validation.isInvalidDate(event.date))
        {
            $("#message").text("Please enter the date in MM/DD/YYYY format.");
            return;
            //display error message
        }

      
        $("#message").text(event.getCountdownMessage());
    });
    
    $("#event").focus();
});