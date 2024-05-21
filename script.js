const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const slider = document.querySelector(".slider");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("nav-active");
    slider.classList.toggle("slider--collapsed");
    });

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("nav-active");
    slider.classList.remove("slider--collapsed");

    const id = n.getAttribute("href").substring(1);
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: "smooth" });
}));