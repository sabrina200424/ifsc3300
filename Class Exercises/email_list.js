const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", evt => {
        // get values user entered in textboxes
        const email1 = $("#email_1").value;
        const email2 = $("#email_2").value;
        const firstName = $("#first_name").value;
    
        // create an error message and set it to an empty string
        let errorMessage = "";

        // check user entries – add to error message if invalid
        if (email1 == "") { 
            errorMessage += "First email is required.\n";
        }
        if (isNaN(email1) == false) {
            errorMessage += "Only numbers for email cannot be accepted.\n";
        }
        if (email2 == "") { 
            errorMessage += "Second email is required.\n";
        }
        if (isNaN(email2) == false) {
            errorMessage += "Only numbers for email cannot be accepted.\n";
        }
        if (email1 != email2) { 
            errorMessage += "Both emails must match.\n";
        }
        if (firstName == "") {
            errorMessage += "First name is required.\n";
        }
        if (isNaN(firstName) == false) {
            errorMessage += "Only numbers for first name cannot be accepted.\n";
        } 
    
        // prevent form submission if there’s an error message
        if (errorMessage != "") {         
            alert(errorMessage);
            evt.preventDefault();
        } 
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});

