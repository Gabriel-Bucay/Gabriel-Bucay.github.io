const scroller = document.querySelector(".scroller");
const scrollAmount = 300; // Distance to scroll per button press
const scrollSpeed = 3000; // Auto-scroll interval
let autoScroll;

// Function to scroll left
function scrollLeft() {
    if (scroller.scrollLeft <= 0) {
        scroller.scrollLeft = scroller.scrollWidth; // Wrap to the last image
    } else {
        scroller.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
}

// Function to scroll right
function scrollRight() {
    if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth) {
        scroller.scrollLeft = 0; // Loop back to the start
    } else {
        scroller.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}


// Auto-scroll function with looping
function autoScrollImages() {
    autoScroll = setInterval(() => {
        scrollRight();
    }, scrollSpeed);
}

// Stop auto-scroll when hovering over scroller
scroller.addEventListener("mouseover", () => clearInterval(autoScroll));
scroller.addEventListener("mouseleave", () => autoScrollImages());

// Start auto-scroll on page load
document.addEventListener("DOMContentLoaded", autoScrollImages);

// Function to update the display image
function updateDisplay(imageSrc) {
    const displayImage = document.getElementById("display-image");
    displayImage.style.opacity = "0"; // Hide before update

    setTimeout(() => {
        displayImage.src = imageSrc || "Images/default-bg.png"; // If no image is selected, use default
        displayImage.style.opacity = "1"; // Fade-in effect
    }, 300);
}

// Set default image on page load
document.addEventListener("DOMContentLoaded", () => {
    updateDisplay("Images/default-bg.png");
});
