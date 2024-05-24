document.addEventListener("DOMContentLoaded", function() {
    // Selecting necessary elements
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");
    const slider = document.querySelector(".slider");

    // Event listener for hamburger menu click
    hamburger.addEventListener("click", () => {
        // Toggle active class for hamburger, navMenu, body, and slider
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle("nav-active");
        slider.classList.toggle("slider--collapsed");
    });

    // Event listeners for navigation links
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        // Remove active classes when a navigation link is clicked
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("nav-active");
        slider.classList.remove("slider--collapsed");

        // Scroll to the target section smoothly
        const id = n.getAttribute("href").substring(1);
        const target = document.getElementById(id);
        target.scrollIntoView({ behavior: "smooth" });
    }));

    // Event listener for feedback form submission
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
