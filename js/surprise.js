const surpriseImg = document.querySelector(".surprise-img");

window.addEventListener("scroll", () => {
  const rect = surpriseImg.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    surpriseImg.style.opacity = "1";
    surpriseImg.style.transform = "translateY(0)";
  }
});
