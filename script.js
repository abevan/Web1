// Function to fetch and display a new dog image
function getDogImage() {
    const imageContainer = document.getElementById('dog-image');
    const loadingText = document.getElementById('loading');
    const randomDogImageAPI = 'https://dog.ceo/api/breeds/image/random';

    // Show loading animation and hide the image
    loadingText.style.display = 'block';
    imageContainer.style.display = 'none';

    // Fetch a random dog image from the API
    fetch(randomDogImageAPI)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Update the image source and show it
            imageContainer.src = data.message;
            imageContainer.style.display = 'block';
        })
        .catch(error => {
            // Log any errors to the console
            console.error('Error fetching dog image:', error);

            // Display an error message to the user
            alert('Sorry, we couldn’t load a new dog image right now. Please try again later!');
        })
        .finally(() => {
            // Hide the loading animation
            loadingText.style.display = 'none';
        });
}
