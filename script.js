/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openNav() {
  document.getElementById("nav").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
}

function closeNav() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("hamburger").style.display = "inline-block";
}
