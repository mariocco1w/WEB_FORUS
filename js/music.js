const music =document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if(!isPPlaying){
        music.play();
        musicBtn.textContent = " ⏸ Pausar cancion ";
        isPlaying = true;

    }else{
        audio.pause();
        musicBtn.textContent = " ▶ Reproducir cancion ";
        isPlaying = false;
    }
});

audio.addEventListener("ended", () => {
    isPlaying = False;
    musicBtn.textContent = " ▶ Reproducir cancion ";
});
