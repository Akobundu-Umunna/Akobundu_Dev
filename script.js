// =========================================
// DARK MODE TOGGLE
// =========================================

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeToggle.innerHTML = isDark
    ? '<i class="bi bi-sun-fill"></i>'
    : '<i class="bi bi-moon-stars-fill"></i>';
});

// =========================================
// NAVBAR SCROLL BORDER
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});