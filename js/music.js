const audio =document.getElementById("audio");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if(!isPPlaying){
        audio.play();
        musicBtn.textContent = " ⏸ Pausar cancion ";

    }else{
        audio.pausa();
        musicBtn.textContent = " ▶ Reproducir cancion ";
    }
    isPlaying = !isPlaying;
});

audio.addEventListener("ended", () => {
    isPlaying = False;
    musicBtn.textContent = " ▶ Reproducir cancion ";
});
