// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the button and the text paragraph using their IDs
    const toggleButton = document.getElementById('toggleButton');
    const toggleText = document.getElementById('toggleText');
  
    // Check if both elements were found before adding listener
    if (toggleButton && toggleText) {
      // Add an event listener that waits for the button to be clicked
      toggleButton.addEventListener('click', function() {
        // Check the current display style of the text
        if (toggleText.style.display === 'none' || toggleText.style.display === '') {
          // If hidden or unset, show it
          toggleText.style.display = 'block'; 
        } else {
          // If visible, hide it
          toggleText.style.display = 'none';
        }
      });
    } else {
      console.error("Button or text element not found!"); // Log error if elements missing
    }
  
  });