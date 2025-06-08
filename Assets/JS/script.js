function toggleTheme() {
  const theme = document.getElementById("themeStylesheet");
  const btnIcon = document.querySelector("#themeToggleBtn i");

  const isLight = theme.getAttribute("href").includes("style.css");

  if (isLight) {
    theme.setAttribute("href", "Assets/CSS/style_dark.css");
    btnIcon.classList.remove("bi-moon-fill");
    btnIcon.classList.add("bi-sun-fill");
  } else {
    theme.setAttribute("href", "Assets/CSS/style.css");
    btnIcon.classList.remove("bi-sun-fill");
    btnIcon.classList.add("bi-moon-fill");
  }
}
