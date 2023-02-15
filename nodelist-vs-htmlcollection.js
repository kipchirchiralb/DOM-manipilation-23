let headings = document.getElementsByTagName("h1"); // html collections
let paragraphs = document.querySelectorAll("p"); // node list

// console.log(headings, paragraphs);

// paragraphs.forEach(function (paragraph) {
//   console.log(paragraph);
//   paragraph.style.color = "green";
// });

console.log(headings);

for (let i = 0; i < headings.length; i++) {
  headings[i].classList.add("title");
  headings[i].classList.add("h1");
}
