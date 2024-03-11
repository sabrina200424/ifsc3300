"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

    // Preload images
    var links = $("#image_list").querySelectorAll("a");

    links.forEach(link => {
        var img = new Image();
        img.src = link.href; // This causes the images to be pre-loaded
    });

    
    image1.addEventListener("mouseover", () => {
        image1.src = "Images/release.jpg";
    });
    image1.addEventListener("mouseout", () => {
        image1.src = "Images/hero.jpg";
    });

    //Adding in mouseover events for each images 
    image2.addEventListener("mouseover", () => {
        image2.src = "Images/deer.jpg";
    });
    image2.addEventListener("mouseout", () => {
        image2.src = "Images/bison.jpg";
    });    
});
