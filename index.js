document.addEventListener("DOMContentLoaded", function () {
  let videoPlayer = document.getElementById("videoPlayer");
  let firstPause = true; // Variable de control para la primera pausa
  let restartTimes = [81, 153, 226]; // Marcas de tiempo en segundos (1:21, 2:33, 3:46)
  let skipRestartCheck = false; // Variable para evitar el reinicio después de saltar

  // Pausa el video en el minuto 00:07 solo la primera vez
  videoPlayer.addEventListener("timeupdate", function () {
    if (firstPause && videoPlayer.currentTime >= 5.0) {
      videoPlayer.pause();
      firstPause = false; // Marcamos que ya se ha pausado la primera vez
      showLanguageButtons(); // Mostramos los botones de idioma
    }

    // Comprueba si el tiempo actual es una de las marcas de reinicio
    if (!skipRestartCheck) {
      restartTimes.forEach(function (time) {
        if (Math.floor(videoPlayer.currentTime) === time) {
          videoPlayer.currentTime = 0; // Reinicia el video
          videoPlayer.pause(); // Pausa el video
        }
      });
    }
  });

  function showLanguageButtons() {
    let botonesVideoDiv = document.getElementById("botonesVideo");
    botonesVideoDiv.style.display = "block";
  }

  // Evita el avance del video hasta que se ha seleccionado un idioma
  let botonesVideo = document.querySelectorAll("#botonesVideo button");
  botonesVideo.forEach(function (button) {
    button.addEventListener("click", function () {
      videoPlayer.currentTime = 5.0; // Vuelve a poner el video en el minuto 00:07
      videoPlayer.play(); // Reproduce el video
    });
  });

  let btn1 = document.getElementById("btn01Btn");
  let btn2 = document.getElementById("btn02Btn");
  let btn3 = document.getElementById("btn03Btn");

  btn1.addEventListener("click", function () {
    skipRestartCheck = true; // Desactiva temporalmente la lógica de reinicio
    videoMinut(0, 5); // Minuto 0:05
  });

  btn2.addEventListener("click", function () {
    skipRestartCheck = true; // Desactiva temporalmente la lógica de reinicio
    videoMinut(1, 31); // Minuto 1:31
  });

  btn3.addEventListener("click", function () {
    skipRestartCheck = true; // Desactiva temporalmente la lógica de reinicio
    videoMinut(2, 17); // Minuto 2:17
  });

  // Función para cambiar el idioma del video y saltar al minuto especificado
  function videoMinut(minutes, seconds) {
    let currentTime = minutes * 60 + seconds; // Convertimos el minuto y segundo a segundos totales
    videoPlayer.currentTime = currentTime; // Establecemos el tiempo en el video
    videoPlayer.play(); // Inicia la reproducción automáticamente después de cambiar el idioma
    setTimeout(() => {
      skipRestartCheck = false; // Reactiva la lógica de reinicio después de un breve período
    }, 1000); // Ajusta el tiempo según sea necesario
  }
});
