// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');

//
// if (currentTheme) {
//   document.documentElement.setAttribute('data-theme', currentTheme);
//
//   if (currentTheme === 'dark') {
//     toggleSwitch.checked = true;
//     sun.style.display = "none";
//   }
// }
//
// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark');
//     sun.style.display = "none";
//     moon.style.display = "block";
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light');
//     sun.style.display = "block";
//     moon.style.display = "none";
//   }
// }
//
// toggleSwitch.addEventListener('change', switchTheme, false);
// https://medium.com/swlh/dark-mode-using-css-variables-cf065a7fa133#:~:text=For%20example%2C%20--text-color%20in%20light%20mode%20can%20be,colors%20or%20shades%20of%20colors%20for%20new%20views.

const sun = document.querySelector("svg.sun");
const moon = document.querySelector("svg.moon");

const html = document.querySelector('html');
const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// html.dataset.theme = `theme-${isOsDark ? 'dark' : 'light'}`;

if (isOsDark) {
  sun.style.display = "none";
  moon.style.display = "block";
  html.dataset.theme = 'theme-dark';
} else {
  sun.style.display = "block";
  moon.style.display = "none";
  html.dataset.theme = 'theme-light';
}
// function startListeningToOSTheme() {
//   matchMediaPrefDark.addEventListener('change', onSystemThemeChange);
// }
//
// function stopListeningToOSTheme() {
//   matchMediaPrefDark.removeEventListener('change', onSystemThemeChange);
// }

// function onSystemThemeChange(e) {
//   const isDark = e.matches;
//   html.dataset.theme = `theme-${isDark ? 'dark' : 'light'}`;
// }

function switchTheme(theme) {
  if (theme === 'light') {
    sun.style.display = "block";
    moon.style.display = "none";
    html.dataset.theme = 'theme-light';
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    html.dataset.theme = 'theme-dark';
  }
  // html.dataset.theme = `theme-${theme}`;
}