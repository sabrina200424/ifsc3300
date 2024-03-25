$("#faqs h1").animate(
    { fontSize: "275%", opacity: 15, right: "+=175" }, 
    2000,
    () => $("#faqs h2").next().fadeIn(1000).fadeOut(1000)
);
