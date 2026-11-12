const boutonTheme = document.querySelector("#bouton-theme");
const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");
const POIDS_PAGE_MO = 2;
const champPages = document.querySelector("#pages-par-jour");
const resultat = document.querySelector("#resultat");
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

document.querySelector("#bouton-calculer").addEventListener("click", function () {
  const nombrePages = Number(champPages.value);
  const poidsParJourMo = nombrePages * POIDS_PAGE_MO;
  const poidsParAnGo = Math.round((poidsParJourMo * 365) / 1000);
  let message = `Cela représente environ ${poidsParAnGo} Go par an. `;

  if (poidsParAnGo < 10) {
    message += "C'est un volume plutôt faible.";
  } else if (poidsParAnGo < 100) {
    message += "C'est un volume modéré.";
  } else {
    message += "C'est un volume important.";
  }

  resultat.textContent = message;
});
