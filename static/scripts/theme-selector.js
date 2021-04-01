/*
 * Selects the theme (light / dark) mode and handles the events associated with
 * the toggler
 *
 * Gijs Burghoorn
 * April 1 2021
 */

var themeToggle = document.getElementById('themeToggle');

var darkModeEnabler = document.getElementById('darkModeEnabler');
var lightModeEnabler = document.getElementById('lightModeEnabler');

function updateTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
        document.documentElement.classList.add('dark')
        darkModeEnabler.style.display = 'none';
        lightModeEnabler.style.display = 'block';
    } else {
        document.documentElement.classList.remove('dark')
        darkModeEnabler.style.display = 'block';
        lightModeEnabler.style.display = 'none';
    }
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'light';
    } else {
        localStorage.theme = 'dark';
    }

    updateTheme();
}

listenToClick(themeToggle, function(event) {
    event.stopPropagation();
    event.preventDefault();

    // Whenever the user explicitly chooses dark mode
    toggleTheme();
    updateTheme();
});

updateTheme();
