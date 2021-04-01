
/*
 * A script to handle the navigation drawer
 *
 * Gijs Burghoorn
 * April 1 2021
 */

var navLinks = document.getElementById('nav-links');
var menuDrawerToggle = document.getElementById('menuDrawerToggle');
var menuIsOpen = false;

listenToClick(menuDrawerToggle, function(event) {
    event.stopPropagation();
    event.preventDefault();

    if (menuIsOpen) {
        navLinks.classList.add('hidden');
    } else {
        navLinks.classList.remove('hidden');
    }

    menuIsOpen = !menuIsOpen;
});
