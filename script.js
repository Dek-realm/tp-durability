const boutonTheme = document.querySelector("#bouton-theme");
const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");

boutonTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("sombre");
  boutonTheme.textContent = document.documentElement.classList.contains("sombre")
    ? "Mode clair"
    : "Mode sombre";
});

curseur.addEventListener("input", function () {
  document.body.style.fontSize = this.value + "%";
  valeurTaille.textContent = this.value + " %";
});
