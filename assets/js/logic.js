// Access toggle switch HTML element
const modeSwitch = document.querySelector('#modeSwitch');
const body = document.querySelector('body');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
modeSwitch.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    body.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    body.setAttribute('class', 'dark');
  }
});