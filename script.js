const boutonTheme = document.querySelector("#bouton-theme");
const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");
const heure = new Date().getHours();
const salutation = document.querySelector("#salutation");

if (heure < 12) {
  salutation.textContent = "Bonjour, bonne lecture !";
} else if (heure < 18) {
  salutation.textContent = "Bon après-midi, bonne lecture !";
} else {
  salutation.textContent = "Bonsoir, bonne lecture !";
}

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
