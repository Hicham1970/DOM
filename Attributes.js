// Dans ce chapitre on va voir  comment acceder au attributs d'un element html

const book = document.body.querySelector("li:first-child .name");

console.log(book);

// pour savoir si un element book possédé un attribut de type class:

console.log(book.getAttribute("class"));

// Et pour changer le nom de cette class

book.setAttribute("class", "name2");
console.log(book);

// Pour savoir si notre élément possède un attribut class :
book.hasAttribute("class"); // true

// Si vous voulez supprimer l'attribut class :
book.removeAttribute("class");
console.log(book.hasAttribute("class")); // false

// et pour rendre a Hicham ce qui appartient a Hicham :
book.setAttribute("class", "name");
console.log(book.hasAttribute("class")); // true
