const boutonTheme = document.querySelector("#bouton-theme");

boutonTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("sombre");
});
