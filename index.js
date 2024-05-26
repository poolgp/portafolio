document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("miVideo");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var indiceBtn = document.getElementById("indiceBtn");
    var nudoBtn = document.getElementById("nudoBtn");
    var desenlaceBtn = document.getElementById("desenlaceBtn");
    var volumeControl = document.getElementById("volumeControl");

    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    indiceBtn.addEventListener("click", function() {
        video.currentTime = 10;
        video.play();
    });

    nudoBtn.addEventListener("click", function() {
        video.currentTime = 163; // 2 minutos y 43 segundos
        video.play();
    });

    desenlaceBtn.addEventListener("click", function() {
        video.currentTime = 300; // 5 minutos
        video.play();
    });

    volumeControl.addEventListener("input", function() {
        video.volume = volumeControl.value;
    });
});
