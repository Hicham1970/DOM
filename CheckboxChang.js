document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#book-list ul");
  // delete books
  list.addEventListener("click", function (e) {
    if (e.target.className === "delete") {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  });

  // Add books
  const addForm = document.forms["add-book"]; // select our form

  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    // Create Elements:

    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    // add Content:

    bookName.textContent = value;
    deleteBtn.textContent = "delete";
    // Add Class:
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");
    //Append child:
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    // delete the input :
    addForm.reset();
  });

  // Hide books:
  // select the checkbox tag
  const hideBox = document.querySelector("#hide");

  hideBox.addEventListener("change", () => {
    if (hideBox.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // search books:
  /**
   * Adds an event listener to the search bar input element that filters the list of books based on the user's input.
   *
   * When the user types into the search bar, this function will hide any list items whose title does not contain the value of the input:  1- get the input from the user and save it to a variable.
   * 2- get the list of list items.
   * 3- loop through the list of list items and check if the title of each list item contains the search query (case-insensitive).
   * 4- if the title contains the search query, display the list item.
   * 5- if the title does not contain the search query, hide the list item.
   * 6- get the input from user and convert it to uppercase.2- get the list of list items.3- loop through the list of list items and check if the title of each list item contains the search query (case-insensitive).4- if the title contains the search query, display the list item.5- if the title does not contain the search query, hide the list item.
   * search query (case-insensitive). This allows the user to quickly find books in the list by typing in the title.
   */
  const searchBar = document.forms["search-books"].querySelector("input");
  searchBar.addEventListener("keyup", (e) => {
    let filter, livres;
    filter = e.target.value.toUpperCase();
    livres = list.getElementsByTagName("li");
    Array.from(livres).forEach((livre) => {
      const title = livre.firstElementChild.textContent;
      if (title.toUpperCase().indexOf(filter) != -1) {
        livre.style.display = "block";
      } else {
        livre.style.display = "none";
      }
    });
  });

  //Tabbed Content: ou Contenu à anglets:
  // selection des contenu à anglets:
  const panneaux = document.querySelectorAll(".panel");
  // selection des onglets:
  const onglets = document.querySelector(".tabs");
  // add un écouteur d’événement sur les onglets:
  onglets.addEventListener("click", function (event) {
    console.log(event.target.tagName);
    if (event.target.tagName == "LI") {
      const ciblePanneau = document.querySelector(event.target.dataset.cible);
      // console.log(ciblePanneau.value);
      panneaux.forEach(function (panel) {
        if (panel === ciblePanneau) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
