// Array of placeholder image URLs
const images = [
    'placeholder1.jpg', // Replace with your first image URL
    'placeholder2.jpg', // Replace with your second image URL
    'placeholder3.jpg', // Replace with your third image URL
    // Add more image URLs here
    'placeholder4.jpg',
    'placeholder5.jpg'
];

// Get the background container element
const backgroundContainer = document.querySelector('.background-container');

// Set the initial background image
let currentIndex = 0; // Start with the first image

// Function to change the background image with a fade transition
function changeBackground() {
    // Increment the index, looping back to the beginning if necessary
    currentIndex = (currentIndex + 1) % images.length;
    // Change the background image
    backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Set the initial background image when the page loads
backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;

// Change background image every 10 seconds (10000 milliseconds) after the initial image is set
setInterval(changeBackground, 10000);