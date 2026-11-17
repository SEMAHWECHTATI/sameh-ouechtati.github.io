document.addEventListener("DOMContentLoaded", () => {
    // 1. Année dynamique dans le footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // 2. Effet Machine à écrire (Typing Effect)
    const roles = [
        "Développeur Full-Stack",
        "Administrateur Systèmes & Réseaux",
        "Ingénieur DevOps",
        "Spécialiste IA & RAG"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }
    typeEffect();

    // 3. Changement de thème (Dark / Light Mode)
    const themeToggle = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector("i");

    themeToggle.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        htmlElement.setAttribute("data-theme", newTheme);
        themeIcon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    });

    // 4. Menu Mobile
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fermer le menu mobile après un clic sur un lien
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 5. Animation d'apparition au scroll (Reveal)
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 80) {
                el.classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // 6. Formulaire de contact (Ouvre le client mail avec les données pré-remplies)
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = encodeURIComponent(`Contact Portfolio - ${name}`);
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:sameh20950@gmail.com?subject=${subject}&body=${body}`;
    });
});