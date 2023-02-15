// let btnContainer = document.getElementsByClassName("btn-container")[0];
let btnContainer = document.querySelector(".btn-container");

btnContainer.innerHTML = "<h3 class='heading'>Buttons Container</h3>";

let newButton = document.createElement("button");
newButton.textContent = "APPLY NOW";
newButton.setAttribute("id", "apply-now-btn");
// newButton.id = "apply-now-btn"
// // console.log(newButton);
// newButton.style.backgroundColor = "black";
// newButton.style.color = "white";

newButton.classList.add("btn");

btnContainer.append(newButton); // adding newButton into the button Container

let testP = document.querySelector("#test");
// console.log(testP);
// console.log(testP.childNodes);
// console.log(testP.children);
let spanEl = testP.children[0];
spanEl.style.fontWeight = "bold";
spanEl.textContent = "hello i am here!!!";
console.log(spanEl);
