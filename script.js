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


document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackList = document.getElementById("feedbackList");

    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(feedbackForm);
        const feedbackData = {};
        formData.forEach((value, key) => {
            feedbackData[key] = value;
        });

        // Construct feedback HTML
        const feedbackHTML = `
            <div class="feedback-item">
                <h4>${feedbackData.name ? feedbackData.name : 'Anonymous'}</h4>
                <p>Type: ${feedbackData.type}</p>
                <p>Rating: ${feedbackData.rating}</p>
                <p>${feedbackData.comments}</p>
            </div>
        `;

        // Append feedback to feedback list
        feedbackList.innerHTML += feedbackHTML;

        // Reset form
        feedbackForm.reset();

        // Scroll to newly added feedback
        feedbackList.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    });
});
