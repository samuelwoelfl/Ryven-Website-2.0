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
const landingpage = document.querySelector(".landingpage");
const node_shadow_opacity = document.querySelectorAll("feFlood");
const li_imgs = document.querySelectorAll(".carousel-listitem img.invert");

console.log(li_imgs);

const html = document.querySelector('html');
const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// html.dataset.theme = `theme-${isOsDark ? 'dark' : 'light'}`;

if (isOsDark) {
  switchTheme('dark');
} else {
  switchTheme('light');
}

function switchTheme(theme) {
  if (theme === 'light') {
    sun.style.display = "block";
    moon.style.display = "none";
    try {
      landingpage.style.backgroundImage = "url('../img/BG-dots_light.png')";
    } catch (err) {}
    var i = node_shadow_opacity.length;
    while (i--) {
      node_shadow_opacity[i].setAttribute("flood-opacity", "0.07");
    }
    var i = li_imgs.length;
    while (i--) {
      li_imgs[i].setAttribute("style", "filter: invert(1)");
    }
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    try {
      landingpage.style.backgroundImage = "url('../img/BG-dots.png')";
    } catch (err) {}
    var i = node_shadow_opacity.length;
    while (i--) {
      node_shadow_opacity[i].setAttribute("flood-opacity", "0.231");
    }
    var i = li_imgs.length;
    while (i--) {
      li_imgs[i].setAttribute("style", "filter: invert(0)");
    }
  }
  html.dataset.theme = `theme-${theme}`;
}