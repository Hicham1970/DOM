//Event Bubbling ?:
let boutons = document.querySelectorAll("#book-list .delete");

console.log(boutons);
btn_Array = Array.from(boutons);
console.log(btn_Array);

//Loop & event
btn_Array.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const li = e.target.parentElement; // on cible le li
    li.parentNode.removeChild(li); // on cible le ul
  });
});

/**Event Bubbling:
 * Lorsqu'on attache un eventListener  à un élément, si on clique sur cet élément, l'événement se déclenche pour cet élément. Si
 * Quand un événement est déclenché sur un élément, il peut  s’tendre jusqu'au parent de cet élément , et ainsi de suite jusqu' au plus lointain parent. Ceci est du au fait que les événement bubbles up : se propagent de l’intérieur vers l’extérieur.
 *Pour prévenir ça, on fait un event.stopPropagation() method  qui arrête l’événement au premier niveau .
 
 Il parait que pour éviter cette propagation accidentelle, on doit gérer les événements de manière plus efficace en écoutant les ancêtres plutôt que chaque élément individuel. 🌟
 Dans notre cas , la cible est le span qui se trouve dans la <li> qui se trouve dans la <ul>, on va cibler la <ul>.
 *
 */
