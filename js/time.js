const startDate = new Date("2025-09-03T17:39:00");
function updateCounter() {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);
  
    const days = Math.floor(diff / (3600 * 24));
    diff %= 3600 * 24;
  
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
  
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
  
    document.getElementById("time-counter").textContent =
      `${days} días · ${hours} horas · ${minutes} minutos · ${seconds} segundos`;
  }
  
  updateCounter();
  setInterval(updateCounter, 1000);