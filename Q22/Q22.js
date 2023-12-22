// 22. Progress Bar

// Create a progress bar that fills up as the user scrolls down the page.

 // Get the progress container and progress bar
 var progressContainer = document.getElementById('progress-container');
 var progressBar = document.getElementById('progress-bar');

 // Calculate the maximum scroll height
 var maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

 // Update the progress bar on scroll
 window.addEventListener('scroll', function() {
     // Calculate the current scroll percentage
     var scrollPercentage = (window.scrollY / maxScrollHeight) * 100;

     // Update the width of the progress bar
     progressBar.style.width = scrollPercentage + '%';
 });

 // Show/hide the progress bar based on scroll position
 window.addEventListener('scroll', function() {
     // If the user has scrolled down, show the progress bar
     if (window.scrollY > 0) {
         progressContainer.style.display = 'block';
     } else {
         // Otherwise, hide the progress bar
         progressContainer.style.display = 'none';
     }
 });