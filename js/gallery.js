const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("gallery-modal-img");
const closeBtn = document.querySelector(".close-gallery");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
