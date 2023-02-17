let headings = document.getElementsByTagName("h1"); // html collection
// console.log(headings);
let paragraphs = document.getElementsByClassName("paragraph"); //html collection
// console.log(paragraphs);

let note = document.getElementById("note"); //element

// console.log(note);

// diff btw a nodeList and a htmlCollection ********************

// querySelector
// let newParapgraphs = document.querySelectorAll("p"); // node list
let newParapgraphs = document.querySelectorAll(".paragraph"); // node list
// console.log(newParapgraphs);
let newNote = document.querySelector("#note"); // element
// console.log(newNote);

// removing elements
newNote.remove();
document.querySelector("#hello").remove();

// create element
let link = document.createElement("a");
link.textContent = "Read more";
link.setAttribute("href", "www.eldohub.co.ke");
console.log(link);

newParapgraphs[0].append(link);



//manipulate the list using query selector

var odd=document.querySelectorAll('.item-group:nth-child(odd)');
var even=document.querySelectorAll('.item-group:nth-child(even)');

for(let j=0;j<odd.length;j++){
    odd[j].style.backgroundColor='yellow';
    even[j].style.backgroundColor='red';

}