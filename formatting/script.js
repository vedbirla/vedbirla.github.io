fetch('/suppliments/header.html')
.then(res => res.text())
.then(data => {
    document.getElementById('header').innerHTML = data;

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});


fetch('/suppliments/footer.html')
.then(res => res.text())
.then(data => document.getElementById('footer').innerHTML = data);


document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".hobby-tile");
    const modal = document.getElementById("popup-modal");
    const modalText = document.getElementById("modal-text");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close-btn");

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

// document.addEventListener('DOMContentLoaded', function () {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     if (menuToggle && navLinks) {
//         menuToggle.addEventListener('click', () => {
//             navLinks.classList.toggle('show');
//         });
//     }
// });