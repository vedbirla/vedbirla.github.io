// Load header HTML
fetch('/suppliments/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Wait until the header is injected before attaching listeners
        setupHeaderInteractions();
    });

// Load footer HTML
fetch('/suppliments/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });


// ========== FUNCTIONS ==========
function setupHeaderInteractions() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    const banner = document.getElementById("tutoringBanner");
    const closeBtn = document.querySelector(".close-banner");

    if (banner && closeBtn) {
        // Only hide if flag was set previously
        if (localStorage.getItem("hideTutoringBanner") === "true") {
            banner.style.display = "none";
        }

        closeBtn.addEventListener("click", () => {
            banner.style.display = "none";
            localStorage.setItem("hideTutoringBanner", "true");
        });
    } else {
        console.warn("Tutoring banner or close button not found in header.");
    }
}

// Optional: Modal logic (only runs on pages where these elements exist)
document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".hobby-tile");
    const modal = document.getElementById("popup-modal");
    const modalText = document.getElementById("modal-text");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close-btn");

    if (!tiles.length || !modal || !modalText || !modalImage || !closeBtn) {
        return; // Skip if not on hobby page
    }

    tiles.forEach(tile => {
        tile.addEventListener("click", () => {
            const info = tile.getAttribute("data-info");
            const imgSrc = tile.getAttribute("data-img");
            modalText.textContent = info;
            modalImage.src = imgSrc;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
