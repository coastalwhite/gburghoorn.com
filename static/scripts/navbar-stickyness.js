var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

var scroll = new SmoothScroll('a[href*="#"]');

window.onscroll = navbarStickyness;

function navbarStickyness() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("md:bg-primary-m-90");
    navbar.classList.add("md:dark:bg-primary-p-80");
  } else {
    navbar.classList.remove("md:bg-primary-m-90");
    navbar.classList.remove("md:dark:bg-primary-p-80");
  }
}

navbarStickyness();
