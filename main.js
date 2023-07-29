const songList = {
  meranaa: "audios/meranaa.mp3",
  tnf: "audios/295.mp3",
  levels: "audios/levels.mp3",
  goat: "audios/Goat_1.mp3",
  celebkill: "audios/Celebrity_Killer_1.mp3",
  jattlife: "audios/jattlife.mp3",
  jattzone: "audios/jattzone.mp3",
  thaa: "audios/thaa.mp3",
  kaafla: "audios/kaafla.mp3",
  takkar: "audios/Takkar_1.mp3",
  kath: "audios/Kath_1.mp3",
  score: "audios/Score_1.mp3",
  raahwarga: "audios/Raah_Warga_1.mp3",
  salute: "audios/Salute_1.mp3",
  Yaar: 'audios/4_Yaar_1.mp3',
  chakagya: 'audios/chakkagya.mp3',
  Gaal: 'audios/Gaal_Ni_Kadni_1.mp3',
  punjadaab: 'audios/punjadaab.mp3',
  Fadejange: 'audios/Sab_Fade_Jange_1.mp3'
};
var currentAudio = null;
let masterPlay = document.getElementById("play");
let masterbackw = document.getElementById("backward");
let masterforw = document.getElementById("forward");
let timer = document.getElementById("time");
let gif = document.getElementById("gif1");
let myprogressBar = document.getElementById("bar1");


function playsong(songName) {
  const songPLayer = new Audio(songList[songName]);
  if (currentAudio) {
    currentAudio.pause();
  }
  songPLayer.play();
  currentAudio = songPLayer;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-pause");
  gif.style.opacity = 1;

  songPLayer.addEventListener("timeupdate", () => {
    let progress = parseInt(
      (currentAudio.currentTime / currentAudio.duration) * 100
    );
    myprogressBar.value = progress;
  });
  myprogressBar.addEventListener("change", () => {
    currentAudio.currentTime =
      (myprogressBar.value * currentAudio.duration) / 100;
  });
}
masterPlay.addEventListener("click", () => {
  if (currentAudio.paused) {
    currentAudio.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else if (currentAudio) {
    currentAudio.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
})

var volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", function () {
  var volumeValue = volumeSlider.value / 100;
  currentAudio.volume = volumeValue;
});

setInterval(function () {
  timer.innerHTML = `0${Math.floor(currentAudio.currentTime / 60)}: ${Math.floor(currentAudio.currentTime % 60)} / 0${Math.floor(currentAudio.duration / 60)}:${Math.floor(currentAudio.duration % 60)}`
}, 1000)

let newaudio = null;
const nextsongbutton = [

  { meranaa: "audios/meranaa.mp3", },
  { tnf: "audios/295.mp3", },
  { levels: "audios/levels.mp3", },
  { goat: "audios/Goat_1.mp3", },
  { celebkill: "audios/Celebrity_Killer_1.mp3", },
  { jattlife: "audios/jattlife.mp3", },
  { jattzone: "audios/jattzone.mp3", },
  { thaa: "audios/thaa.mp3", },
  { kaafla: "audios/kaafla.mp3", },
  { takkar: "audios/Takkar_1.mp3", },
  { kath: "audios/Kath_1.mp3", },
  { score: "audios/Score_1.mp3", },
  { raahwarga: "audios/Raah_Warga_1.mp3", },
  { salute: "audios/Salute_1.mp3", },
  { Yaar: 'audios/4_Yaar_1.mp3', },
  { chakagya: 'audios/chakkagya.mp3', },
  { Gaal: 'audios/Gaal_Ni_Kadni_1.mp3', },
  { punjadaab: 'audios/punjadaab.mp3', },
  { Fadejange: 'audios/Sab_Fade_Jange.mp3' }
]
let index = 0;
masterforw.addEventListener(
  'click',
  function (index) {
    index += 1
    nextsongbutton[index]
  }
)

// let i = 0;
// function nextsongplays(i) {
//   const newaudiore = new Audio(nextsongbutton[i])
//   if (currentAudio) {
//     currentAudio.pause();
//   }
//   newaudiore.play();
//   currentAudio = newaudiore
// }
let sidhufirst = document.querySelector('.sidhufirst')
let moosaji = document.querySelector('.moosaji')
let blur = document.querySelector('.blur')
sidhufirst.addEventListener(
  'click',
  function () {
    moosaji.classList.remove('hidden');
    blur.classList.remove('hidden')
  }
)
function hide() {
  blur.classList.add('hidden')
  moosaji.classList.add('hidden')
}
blur.addEventListener(
  'click', hide
)
document.addEventListener('keydown',
  function (e) {
    if (e.key === 'Escape' && !moosaji.classList.contains('hidden')) {
      hide()
    }
  }
)