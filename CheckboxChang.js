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
});

// Hide books:

const hideBox = document.querySelector("#hide");

hideBox.addEventListener("change", () => {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});
