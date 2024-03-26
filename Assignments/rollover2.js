"use strict";
$(document).ready(() => {

    // process each img tag
    $("#image_rollovers img").each( (index, img) => {
        const oldURL = img.src;      // gets the src attribute
        const newURL = img.id;       // gets the id attribute

        // preload rollover image		
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        $(img).mouseover( () => img.src = newURL ); //change out the hover attribute to mouseover
        $(img).mouseout( () => img.src = oldURL); //change out the hover attribute to mouseout
      //removed out the commented out portion as the textbook asked 
    });
    
});