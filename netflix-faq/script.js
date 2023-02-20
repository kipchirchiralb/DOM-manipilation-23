const openQBtns = document.querySelectorAll(".open-q");

openQBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    if (event.target.textContent === "+") {
      closeOpenAnswers();
      event.target.parentElement.nextElementSibling.style.display = "block";
      event.target.textContent = "x";
    } else {
      event.target.parentElement.nextElementSibling.style.display = "none";
      event.target.textContent = "+";
    }
  });
});

function closeOpenAnswers() {
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.style.display = "none";
  });
  openQBtns.forEach((btn) => (btn.textContent = "+"));
}
