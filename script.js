// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  const toggleSlideBtn = document.getElementById("toggleSlideBtn");
  const slide1 = document.getElementById("slide1");
  const slide2 = document.getElementById("slide2");

  // Event listener for the toggle slide button
  toggleSlideBtn.addEventListener("click", function() {
    // Toggle active class between slide1 and slide2
    slide1.classList.toggle("active");
    slide2.classList.toggle("active");
  });
});
