// * Quand un événement est déclenché sur un élément, il peut  s’tendre jusqu'au parent de cet élément , et ainsi de suite jusqu' au plus lointain parent. Ceci est du au fait que les événement bubbles up : se propagent de l’intérieur vers l’extérieur.
//  *Pour prévenir ça, on fait un event.stopPropagation() method  qui arrête l’événement au premier niveau .
//**Il parait que pour éviter cette propagation accidentelle, on doit gérer les événements de manière plus efficace en écoutant les ancêtres plutôt que chaque élément individuel.Dans notre cas , la cible est le span qui se trouve dans la <li> qui se trouve dans la <ul>, on va cibler la <ul>.*/

// selection de <ul>:

const list = document.querySelector("#book-list ul");

// add an event listener:
/**
 * la fonction de  callback est appelée lorsque le clic est détecté sur l'élément.
 * Si la cible a une class delete, alors il faut  supprimer cette entrée de la liste.
 * cette entrée est un li, donc on va sélectionner  son parent direct pour le supprimer
 */

list.addEventListener("click", function (event) {
  if (event.target.className === "delete") {
    const li = event.target.parentNode;
    list.removeChild(li);
  }
});
