// elements
var hamburger = document.getElementById("hamburger");
var exit = document.getElementById("exit");
var navDropdown = document.getElementsByClassName('nav-dropdown');
var navLinksContainer = document.getElementsByClassName('nav-links-container');

exit.style.display = "none";
navDropdown[0].style.display = "none";

hamburger.addEventListener("click", function() {
  hamburger.style.display = "none";
  exit.style.display = "inline-block";
  navDropdown[0].style.display = "block";
  navLinksContainer[0].style.display = "none";
});

exit.addEventListener("click", function() {
  hamburger.style.display = "inline-block";
  exit.style.display = "none";
  navDropdown[0].style.display = "none";
  navLinksContainer[0].style.display = "block";
});
