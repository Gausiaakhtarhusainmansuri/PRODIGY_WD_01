const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

/* Scroll navbar effect */
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    // highlight active section
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* mobile menu toggle */
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* close menu on click */
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});