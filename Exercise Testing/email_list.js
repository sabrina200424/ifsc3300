$(document).ready( () => {
 
    // handle click on Join List button
    $("#join_list").click( () => {
        const email1 = $("#email_1").val();
        const email2 = $("#email_2").val();
        let isValid = true;
 
        if (email1 == "") { 
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        } 
        
        if (email2 == "") { 
            $("#email_2").next().text("This field is required.");
            isValid = false; 
        } else if (email1 != email2) { 
            $("#email_2").next().text(
                "The email addresses must match.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }
        
        if ($("#first_name").val() == "") {
            $("#first_name").next().text(
                "This field is required.");
            isValid = false;
        } 
        else {
            $("#first_name").next().text("");
        }
        
        // submit the form if all entries are valid
        if (isValid) {
            $("#email_form").submit();
        }
    });
// handle click on Clear Form button
$("#clear_form").click( () => {
    $("#email_1").val("");
    $("#email_2").val("");
    $("#first_name").val("");
 
    $("#email_1").next().text("*");
    $("#email_2").next().text("*");
    $("#first_name").next().text("*");
    
    $("#email_1").focus();
});
 
$("#email_1").focus();
});
