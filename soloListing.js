const mainImageElement = document.getElementById("main-image");

// Fetch the individual listing data
fetch("/listing/:id") // Replace ":id" with the actual listing ID
  .then((response) => response.json())
  .then((data) => {
    // Check if the API request was successful
    if (data.success && data.singleListing) {
      const imageUrl = data.singleListing.image_urls[0].url;
      mainImageElement.src = imageUrl;
    } else {
      console.error("Error retrieving individual listing:", data.message);
    }
  })
  .catch((error) => {
    console.error("Error retrieving individual listing:", error);
  });
