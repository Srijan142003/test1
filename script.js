// Replace 'YOUR_UNSPLASH_ACCESS_KEY' with your actual Unsplash Access Key
const unsplashAccessKey = "M5aPfdQpfSCeI4lRvSLL51n_ej5dJZjdNO2oGCC0F20"; 
const keywords = 'technology, science, abstract'; // Keywords for image search
const apiUrl = `https://api.unsplash.com/photos/random?query=${keywords}&client_id=${unsplashAccessKey}`;

// Get the background container element
const backgroundContainer = document.querySelector('.background-container');

// Function to fetch a random image from Unsplash
async function fetchRandomImage() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.urls.full; // Get the URL of the full-sized image
    } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
        return null; // Return null if fetching fails
    }
}

// Function to change the background image with a fade transition
async function changeBackground() {
    const imageUrl = await fetchRandomImage();
    if (imageUrl) {
        backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
    }
}

// Fetch and set the initial background image
changeBackground();

// Change background image every 10 seconds (10000 milliseconds) after the initial image is set
setInterval(changeBackground, 10000);