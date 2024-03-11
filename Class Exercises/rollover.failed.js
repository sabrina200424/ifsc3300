"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

    // preload images
    var links = $("#image_list").querySelectorAll("a");
    const imageCache = [];
        let image = null;
    // attach mouseover and mouseout events for each image

    for ( let image_list of links) {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
    
        image1.addEventListener("mouseover", () => {
            image1.src = "Images/release.jpg";
        });
        image1.addEventListener("mouseout", () => {
            image1.src = "Images/deer.jpg";
        });
        image2.addEventListener("mouseover", () => {
            image2.src = "Images/hero.jpg";
        });
        image2.addEventListener("mouseout", () => {
            image2.src = "Images/bison.jpg";

        });           
    }

});