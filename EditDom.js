// Modify an Element , add text for ex.
// select tout les class name
// qui se trouve dans une li qui se trouve dans une id = "book-list".
let books = document.querySelectorAll("#book-list li .name"); // select all the spans
console.log(books); // Display in console

// Puisqu'on utilise la méthode querySelectorAll(), qui donne un NodeList, on a pas besoin de passer par Array.from(books) pour utiliser forEach.
// Ceci est vrais mais pas si on utilise getElementByClassName ou TagName qui donne des HTMLCollection qui  ne peut accepter la méthode forEAch que si on la transforme en un array.

// Looper
books.forEach(function (item) {
  item.textContent += " ( New book)"; // modify the inner Text of each item.
  console.log(item.textContent); // display the inner Text of each item.
});

// éditer un Element:
// Imaginons que nous voulons changer tout le contenu de la div qui contient la liste cad celle qui a le id = “book-list” par un titre h2 suivi d’un petit paragraphe:

let bookList = document.getElementById("book-list");
console.log(bookList);
// pour voir le contenu de cette div:
let contenu = bookList.innerHTML;
console.log(contenu);

// pour  changer le contenu de cette div :

bookList.innerHTML =
  "<h2>La nouvelle liste des livres</h2>" +
  "<ul><li class='book'><span class='name'>Le Petit Prince</span>  <li class='book'><span class='name'>La planète des singes </span>";
// On peut même ajoute un petit paragraphe :
bookList.innerHTML += "<p>C'est mieux comme ça !!.</p>";


