const list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// add the functionality  to create a new book item in the list, add a new book to the collection:
/**
 * Quand on click un bouton dans un form, le form lui même submit, on a ici un submit event.
 *On va installer un écouteur d'événement sur ce submit pour empêcher que le formulaire ne se soumette
 Si le form n'a pas d"'action" a faire , il va rafraîchir la page, et ce qu'on a  fait ne sera plus là (suppression des livre). Et on veut pas ça.
 On va utiliser preventDefault() method sur le form
 */

// add an event listener to the form:

const addForm = document.forms["add-book"]; // select our form
console.log(addForm);

addForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the default action of the form which is submitting it.
  const value = addForm.querySelector('input[type="text"]').value; //  get the input value from our text field.
  console.log(value);
});
