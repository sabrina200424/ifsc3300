"use strict";
//add in strict derative if clicking isn't working
$(document).ready( () => {
    
    $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )  
		         .animate( { fontSize: "175%", left: 0 }, 1000 );
		    
	// runs when the top-level heading is clicked
    // is set to target h1 link
	$("#faqs h1").click( () => {
		$("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000 )  
			         .animate( { fontSize: "175%", left: 0 }, 1000 );
	}); // end click

    $("#faqs h2").click( evt => {
        const target = evt.currentTarget;
        $(target).toggleClass("minus");
        if ($(target).attr("class") == "minus") {
            $(target).next().slideDown(1000, "easeOutBounce");
        }
        //slide no. 32 from chapter 9 content 
		//put under target function
        else {
            $(target).next().slideUp(1000, "easeInBounce");
        }
    });
    
});