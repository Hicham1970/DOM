// Maintenant on va créer un événement sur le click des 4 span de la classe delete:
let boutons = document.querySelectorAll("#book-list .delete");

console.log(boutons); // on a un NodeList  avec nos boutons
// On peut l'envoyer dans une boucle pour ajouter l'écouteur d'événements à chacun d'eux:
// Mais pour utiliser la method forEach() , il faut le rendre en un Array ====>>
btn_Array = Array.from(boutons);
console.log(btn_Array);
//  looper et ajouter l'écouteur a tout les boutons! a chaque fois que je click je fait disparaître le tag li the parent element, pour cela on doit trouver le parent du li qui est la ul  et retirer son enfant li:
btn_Array.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const li = e.target.parentElement; // On récupère l'élément parent qui est <li>
    li.parentNode.removeChild(li); //  On supprime l'<li> du DOM on ciblant son  parent et en passant l'enfant</
  });
});

// les link sont des tag qui  permettent de faire du lien vers une page ou une action
// Pour récupérer le contenu du link :

const link = document.querySelector("#page-banner a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(
    "La navigation vers",
    event.target.textContent,
    " a été annulée !!"
  );
});
