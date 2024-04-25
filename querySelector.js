// QuerySelector:

// On Jquery , the selector is a string that contains one or more selectors separated by commas.
// $ (jquery) and $('selector') are used to select elements in the DOM based on these selectors
// in javascript it's little bit different:

let wrap = document.querySelector("#wrapper");
// console.log(wrap);

// imaginons que nous voulons sélectionner le 1er span du 2eme li de la ul qui se trouve dans le titre avec la class title , elle même se trouve dans la div avec le id ="book-list", le css selector is:"#book-list li:nth-child(2) .name"

let wmf = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wmf);

// Maintenant imaginer que vous vouliez chercher tout les span avec la class="name" qui se trouvent dans une li qui se trouve dans une div avec un id="book-list"

let books = document.querySelector("#book-list li .name");
console.log(books); // returns the first element corresponding
// To select All the spans:
books = document.querySelectorAll("#book-list li .name");
console.log(books); // returns a NodeList
// de meme ce NodeList ressemble  à un tableau, il ne l'est pas car :
// - Il n'a pas la méthode pourEach
// - Les éléments sont accessibles via une notation d'index ou avec des opérateurs tels que [] et ().
// Alors on doit le transformer en array ::==>

let booksArray = Array.from(books);
console.log(booksArray);
// Maintenant on peut utiliser  forEach ou mettre dans un tableau etc...

booksArray.forEach(function (book) {
  console.log(book.textContent);
  
});
