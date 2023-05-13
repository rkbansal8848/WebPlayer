console.log("Welcome to WebPlayer Exo")

let songIndex = 0;
let audioElement = new Audio('../songs/21.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let changetoplay = Array.from(document.getElementsByClassName('changetoplay'))
let masterSongName = document.getElementById('masterSongName')
let previouspage = document.getElementById('previouspage');
let nextpage = document.getElementById('nextpage');
let homepage=document.getElementById('homepage')
let aboutpage=document.getElementById('aboutpage')

homepage.addEventListener('click', () => {
    window.location.href = '../pages/index.html';
});
aboutpage.addEventListener('click', () => {
    window.location.href = '../pages/about.html';
});

let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');

let bgim = document.querySelector('.container');
bgim.style.backgroundImage = "url('../extras/background2.jpg')";


let songs = [
    { songName: "Fade - Alan Walker", filepath: "../songs/1.mp3", coverPath: "../covers/9.jpg" },
    { songName: "Sky High - Electronomia", filepath: "../songs/2.mp3", coverPath: "../covers/8.jpg" },
    { songName: "High - JPB", filepath: "../songs/3.mp3", coverPath: "../covers/7.jpg" },
    { songName: "Blank - Disfigure", filepath: "../songs/4.mp3", coverPath: "../covers/6.jpg" },
    { songName: "Infectious - Tobu", filepath: "../songs/5.mp3", coverPath: "../covers/5.jpg" },
    { songName: "Jumbo - Alex Skrindo", filepath: "../songs/6.mp3", coverPath: "../covers/4.jpg" },
    { songName: "On & On - Cartoon", filepath: "../songs/7.mp3", coverPath: "../covers/3.jpg" }

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


//Handle play/pause click
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.setAttribute("src", "https://img.icons8.com/nolan/32/pause.png");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.setAttribute("src", "https://img.icons8.com/nolan/32/play.png");
        gif.style.opacity = 0;
        changetoplay.forEach(element => {
            element.setAttribute('src', '../svg images/play.svg');
        });
    }

})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    //Update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.setAttribute("src", "../svg images/play.svg");
    })
}

//e.target.classList.remove("  ")/add(" ")
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.setAttribute("src", "../svg images/pause.svg");
        audioElement.src = `../songs/${songIndex + 20}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.setAttribute("src", "https://img.icons8.com/nolan/32/pause.png");
    })
}
)
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 1;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `../songs/${songIndex + 20}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.setAttribute("src", "https://img.icons8.com/nolan/32/pause.png");


})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 1;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `../songs/${songIndex + 20}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.setAttribute("src", "https://img.icons8.com/nolan/32/pause.png");


})

previouspage.addEventListener('click', function() {
    window.location.href = '../pages/next.html';
  });
  
  nextpage.addEventListener('click', function() {
    
  });

  page1.addEventListener('click',()=>{
    window.location.href = '../pages/index.html';
  });
  page2.addEventListener('click',()=>{
    window.location.href = '../pages/next.html';
  });
  page3.addEventListener('click',()=>{
    window.location.href = '../pages/next1.html';
  });
