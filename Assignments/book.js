"use strict";

$(document).ready(function() {
    $("#categories h2").click( evt => {
        const h2 = evt.currentTarget;
//targets the h2 element
        $(h2).toggleClass("minus");

        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
            $(h2).next().show();
        }

        $("#image").attr("src", "");
    }); 
// makes the following line into an empty string

    $("#web_images a, #language_images a, #database_images a").each( (index, img) => {
 //tagets all of the specific id in the html document       
        var imageURL = $(img).attr("href");

        // putting in the function to load out the different images		
        var bookImage = new Image();
        bookImage.src = imageURL;

        	
        $(img).click( evt => {
            $("#image").attr("src", imageURL);
//changes out image url once clicked
       
        evt.preventDefault();
        }); 
    }); 
}); 