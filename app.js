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
console.log(addForm);

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  // console.log(value);

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
});
