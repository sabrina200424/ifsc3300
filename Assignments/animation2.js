$(document).ready(() => {
    // runs when an h2 heading is clicked
    $("#faqs h2").click(evt => {
        const h2 = evt.currentTarget;

        $(h2).toggleClass("minus");

        if ($(h2).attr("class") != "minus") {
            $(h2).next().fadeOut(500);
        } else {
            $(h2).next().fadeIn(500);
        }

        evt.preventDefault();
    }); // end click

    // runs when the page is ready
    $("#faqs h1").animate({ fontSize: "650%", opacity: 1, left: 0 }, 1000, 'easeInOutCubic')
        .animate({ fontSize: "175%", left: 0 }, 1000, 'easeInOutCubic');

    // runs when the top-level heading is clicked
    $("#faqs h1").click(() => {
        $("#faqs h1").animate({ fontSize: "650%", opacity: 1, left: 0 }, 2000, 'easeInOutCubic')
            .animate({ fontSize: "175%", left: 0 }, 1000, 'easeInOutCubic');
    }); // end click
}); // end ready
