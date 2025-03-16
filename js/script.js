document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("transition-overlay");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const buttons = document.querySelectorAll(".btn");

    // Load theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        gsap.to("body", { opacity: 0, duration: 0.3, onComplete: () => {
            body.classList.toggle("dark");

            // Save theme preference
            if (body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "🌙";
            }

            gsap.to("body", { opacity: 1, duration: 0.3 });
        }});
    });

    // GSAP Button Hover Effect
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power1.out" });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(button, { scale: 1, duration: 0.2, ease: "power1.in" });
        });
    });

    // Page Transition Effect
    function startTransition(url) {
        overlay.style.pointerEvents = "auto";
        gsap.to(overlay, { opacity: 1, duration: 0.5, onComplete: () => {
            window.location.href = url;
        }});
    }

    document.querySelectorAll("a").forEach(link => {
        if (link.getAttribute("href") && !link.getAttribute("href").startsWith("#")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                let targetUrl = this.getAttribute("href");
                startTransition(targetUrl);
            });
        }
    });

    gsap.from(overlay, { opacity: 1, duration: 0.5, onComplete: () => {
        overlay.style.pointerEvents = "none";
    }});
});
