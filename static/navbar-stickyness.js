window.onscroll = navbarStickyness;

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarStickyness() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("md:bg-primary-m-20");
  } else {
    navbar.classList.remove("md:bg-primary-m-20");
  }
}
