const bouton = document.querySelectorAll("button");
let afichText = document.querySelector("#ecrantAfichage");
const boutonAC = document.querySelector("#butonAC");
const boutonDEL = document.querySelector("#butonDEL");
let boutonR = document.querySelector("#butonR");
let result = "";

for (let i = 0; i < bouton.length; i++) {
  bouton[i].addEventListener("click", () => {
    result = bouton[i].textContent;

    console.log("je suis la ", result.textContent);
    if (result === "AC") {
      afichText.innerHTML = "";
    } else if (result == "DEL") {
      afichText.innerHTML = afichText.innerHTML.slice(0, -1);
    } else if (result === "=") {
      optionClick(result);
    } else {
      afichText.innerHTML += result;
    }
  });
}
function optionClick(result) {
  if (result === "=") {
    try {
      // pour voir si code ecrit fonctionne
      afichText.innerHTML = eval(afichText.innerHTML);
      //eval(afichTex.innerHTML) Évaluer l'expression mathématique que l'utilisateur entre
    } catch (error) {
      // si il ne fonctionne pas catch revois une erreur dans l'ecrant
      afichText.innerHTML = "Erreur"; // Si l'expression est invalide
    }
  }
}
