const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

// Cargar estado guardado
cards.forEach(card => {
  const id = card.dataset.id;
  if (localStorage.getItem(id) === "open") {
    card.classList.add("open");
  }
});

// Click en carta
cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;

    // Si ya fue abierta, no hacer nada
    if (card.classList.contains("open")) return;

    // Abrir carta
    card.classList.add("open");
    localStorage.setItem(id, "open");

    // Mostrar frase después de la animación
    setTimeout(() => {
      modalText.textContent = card.dataset.message;
      modal.style.display = "flex";
    }, 700);
  });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

