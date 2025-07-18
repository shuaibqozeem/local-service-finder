document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    // Toggle navigation menu
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Smooth Scrolling with Element Check
document.querySelectorAll(".nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // If it's an internal anchor (starts with #), prevent default
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
        // Otherwise, let it navigate normally
    });
});


    // Dynamic Services Loading
    const servicesList = document.querySelector(".services-list");
    if (servicesList) {
        const services = ["Plumbing", "Electrical Repairs", "Painting", "Cleaning", "Carpentry"];

        services.forEach(service => {
            const div = document.createElement("div");
            div.classList.add("service-item");
            div.textContent = service;
            servicesList.appendChild(div);
        });
    }
});
