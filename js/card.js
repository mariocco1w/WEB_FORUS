const cards = document.querySelectorAll(".card");
const modal = document.getElementById("card-modal");
const text = document.getElementById("card-text");
const closeBtn = document.querySelector(".close-modal");

cards.forEach(card => {
  card.addEventListener("click", () => {
    text.textContent = card.dataset.message;
    modal.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
