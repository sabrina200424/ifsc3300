const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    const caption = $("#caption");        // the h2 element
    const mainImage = $("#main_image");   // the main img element
    
    // get all the <a> tags in the ul element
    const imageLinks = $("#image_list").querySelectorAll("a");

    let currentIndex = 0; // Sets image index
    const imageCount = imageLinks.length; // Total number of images
    const changeInterval = 3000; // Changing image for 3 seconds
    
   
    const nextImage = () => {
        // Update the current index
        currentIndex = (currentIndex + 1) % imageCount; // Loop back to 0 if at the end
        const link = imageLinks[currentIndex];
        
        // Set new image and caption
        mainImage.src = link.href;
        mainImage.alt = link.title;
        caption.textContent = link.title;
    };
    
    // Preload images and set initial image and caption
    imageLinks.forEach((link, index) => {
        const image = new Image();
        image.src = link.href;
       
        
        
        if(index == 0) {
            mainImage.src = link.href;
            mainImage.alt = link.title;
            caption.textContent = link.title;
        }
    });

    // Start the slideshow
    setInterval(nextImage, changeInterval);
    
    
});

