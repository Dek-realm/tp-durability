const boutonTheme = document.querySelector("#bouton-theme");
const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");
const POIDS_PAGE_MO = 2;
const champPages = document.querySelector("#pages-par-jour");
const resultat = document.querySelector("#resultat");
const questions = [
  {
    question: "En quelle année la première page web a-t-elle été publiée ?",
    choix: ["1969", "1991", "2005"],
    bonne: 1
  },
  {
    question: "Quel est le poids approximatif d'une page web typique aujourd'hui ?",
    choix: ["2 Ko", "2 Mo", "2 Go"],
    bonne: 1
  },
  {
    question: "Où les pages web sont-elles stockées ?",
    choix: ["Dans des centres de données", "Dans les câbles sous-marins", "Dans les écrans"],
    bonne: 0
  }
];
const zone = document.querySelector("#zone-quiz");

for (let indexQuestion = 0; indexQuestion < questions.length; indexQuestion++) {
  const question = questions[indexQuestion];
  const texteQuestion = document.createElement("p");
  texteQuestion.textContent = question.question;
  zone.append(texteQuestion);

  const retour = document.createElement("p");
  zone.append(retour);

  for (let indexChoix = 0; indexChoix < question.choix.length; indexChoix++) {
    const boutonChoix = document.createElement("button");
    boutonChoix.type = "button";
    boutonChoix.textContent = question.choix[indexChoix];
    boutonChoix.addEventListener("click", () => {
      retour.textContent = indexChoix === question.bonne
        ? "Bonne réponse !"
        : "Mauvaise réponse, réessayez.";
    });
    zone.append(boutonChoix);
  }
}

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
