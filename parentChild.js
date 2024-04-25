// Imaginez ce scenario: on veut retrouver le parent  de la div avec le id = book-list

const bookList = document.querySelector("#book-list");
console.log("Le node  parent de la div book_list est : ", bookList.parentNode);
console.log(
  "l’élément   parent de la div book_list est : ",
  bookList.parentElement
);
// Maintenant on part du parent pour  aller vers l'enfant, c'est à dire vers les éléments enfants de book_list

console.log("Les enfants de la div sont : ", bookList.childNodes); // [text, h2.title,text,ul,text] donne un NodeList,  get all the nodes , including text = line breaks and comments
console.log("Les enfants de la div sont : ", bookList.children); // [h2.title,ul]donne un HTMLCollection  get all the nodes  that are children of this element
