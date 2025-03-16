document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("transition-overlay");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        // Add a quick fade transition
        gsap.to("body", { opacity: 0, duration: 0.3, onComplete: () => {
            body.classList.toggle("dark"); // Toggle Dark Mode

            // Save theme preference
            if (body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "🌙";
            }

            // Fade back in
            gsap.to("body", { opacity: 1, duration: 0.3 });
        }});
    });

    // Function to start transition effect
    function startTransition(url) {
        overlay.style.pointerEvents = "auto";  // Enable interaction with overlay
        gsap.to(overlay, { opacity: 1, duration: 0.5, onComplete: () => {
            window.location.href = url;
        }});
    }

    // Add transition to all internal links
    document.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") && !link.getAttribute("href").startsWith("#")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                let targetUrl = this.getAttribute("href");
                startTransition(targetUrl);
            });
        }
    });

    // Page Load Animation (Fade-in effect)
    gsap.from(overlay, { opacity: 1, duration: 0.5, onComplete: () => {
        overlay.style.pointerEvents = "none";  // Disable interaction once loaded
    }});
});

