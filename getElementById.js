const titles = document.getElementsByClassName("title");
console.log(Array.isArray(titles)); // false
// On sait mnt que notre HtmlCollection n'est pas un Array, Alors on va la transformer en un Array ===>>>>
let title_Array = Array.from(titles);
console.log(Array.isArray(title_Array)); // true

// Maintenant on peut louper comme bon il me semble dans cet Array:

title_Array.forEach(function (element) {
  console.log(element);
});
