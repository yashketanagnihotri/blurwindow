const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btns = document.querySelectorAll(".show-modal");
//this returns a list which may be used as an array
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
  });
}
function close() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}
btnCloseModal.addEventListener("click", close);
overlay.addEventListener("click", close);
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    close();
  }
});
