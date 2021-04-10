const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const sun = document.querySelector("svg.sun");
const moon = document.querySelector("svg.moon");

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    sun.style.display = "none";
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    sun.style.display = "none";
    moon.style.display = "block";
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    sun.style.display = "block";
    moon.style.display = "none";
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
// https://medium.com/swlh/dark-mode-using-css-variables-cf065a7fa133#:~:text=For%20example%2C%20--text-color%20in%20light%20mode%20can%20be,colors%20or%20shades%20of%20colors%20for%20new%20views.