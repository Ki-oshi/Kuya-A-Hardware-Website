document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");
    const slider = document.querySelector(".slider");

    // Toggle classes on hamburger click
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle("nav-active");
        slider.classList.toggle("slider--collapsed");
    });

    // Remove active classes and smooth scroll on nav link click
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", (e) => {
        e.preventDefault();
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("nav-active");
        slider.classList.remove("slider--collapsed");

        // Smooth scroll to the target section
        const id = n.getAttribute("href").substring(1);
        const target = document.getElementById(id);
        target.scrollIntoView({ behavior: "smooth" });
    }));
});
