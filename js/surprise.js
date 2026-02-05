const starMap = document.querySelector(".star-map");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        starMap.classList.add("show");
      }
    });
  },
  {
    threshold: 0.4
  }
);

observer.observe(starMap);

