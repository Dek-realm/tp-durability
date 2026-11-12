const boutonTheme = document.querySelector("#bouton-theme");

boutonTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("sombre");
  boutonTheme.textContent = document.documentElement.classList.contains("sombre")
    ? "Mode clair"
    : "Mode sombre";
});
