const openQBtns = document.querySelectorAll(".open-q");
openQBtns.forEach(function (btn) {
  //  this code runs for each + icon(btn)
  btn.addEventListener("click", function (event) {
    // open its rel answer
    // event bubbling and event capturing
    closeOpenAnswers();
    event.target.parentElement.nextElementSibling.style.display = "block";
  });
});
function closeOpenAnswers() {
  //   openQBtns.forEach((btn) => {
  //     btn.parentElement.nextElementSibling.style.display = "none";
  //   });
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.style.display = "none";
  });
}`x`
