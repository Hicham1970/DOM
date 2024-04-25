// Mouvement transversal frere-frere
// Dans ce chapitre on va naviguer côté frères et soeurs:
// prochain frère:
const bookList = document.querySelector("#book-list");
console.log(
  "Le prochain noeud frère de book-list est : ",
  bookList.nextSibling
); // on cible le prochain node frère et on a #text cad un saut de ligne "\n ".
console.log(
  "Le prochain element frère de book-list est : ",
  bookList.nextElementSibling
); // on cible le prochain element frère et on a form#add-book cad un element html "form".
console.log(bookList.nextElementSibling.nodeName); //FORM

// precedent frère:
console.log(
  "Le precedent noeud frère de book-list est : ",
  bookList.previousSibling
);

console.log(
  "L' élément precedent frère de book-list est : ",
  bookList.previousElementSibling
);

// Imaginons que nous voulons ajouter un text au paragraphe du header:

bookList.previousElementSibling.querySelector("p").innerHTML +=
  "<br />Ceci est une addition par  JS";
