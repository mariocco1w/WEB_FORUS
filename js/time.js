const startDate = new Date("2025-09-03T17:39:00");
const counter = document.getElementById("time-counter");

function updateTime(){
    const now = new Date();
    const diff =  now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (100*60*60))%24);
    const minute = Math.floor((diff /(1000*60))%60);
    const seconds = Math.floor((diff / 1000)%60);

    counter.textContent=
    '${days} días · ${hours} horas · ${minutes} minutos · ${seconds} segundos';
}

setInterval(updateTime, 1000);
updateTime();