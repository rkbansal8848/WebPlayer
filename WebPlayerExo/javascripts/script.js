console.log("Welcome to WebPlayer Exo")

let songIndex = 0;
let audioElement = new Audio('../songs/1.mp3');
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
bgim.style.backgroundImage = "url('../extras/backGround.jpg')";


let songs=[
    { songName: "Power - The Rock", filepath: "../songs/10.mp3", coverPath: "../covers/10.jpg" },
    { songName: "Loca Dance - Absounds", filepath: "../songs/20.mp3", coverPath: "../covers/20.jpg" },
    { songName: "Deep Bluesea - Dasaintz", filepath: "../songs/30.mp3", coverPath: "../covers/30.jpg" },
    { songName: "Dark Force - Alexey", filepath: "../songs/40.mp3", coverPath: "../covers/40.jpg" },
    { songName: "Inspire - Creative", filepath: "../songs/50.mp3", coverPath: "../covers/50.jpg" },
    { songName: "Funmaker - Roadtomusic", filepath: "../songs/60.mp3", coverPath: "../covers/60.jpg" },
    { songName: "Name Rock - Romanov", filepath: "../songs/70.mp3", coverPath: "../covers/70.jpg" }
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
        audioElement.src = `../songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
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
    audioElement.src = `../songs/${songIndex}.mp3`;
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
    audioElement.src = `../songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.setAttribute("src", "https://img.icons8.com/nolan/32/pause.png");


})

previouspage.addEventListener('click', function () {

});

nextpage.addEventListener('click', function () {
    window.location.href = '../pages/next.html';
});

page1.addEventListener('click', () => {
    window.location.href = '../pages/index.html';
});
page2.addEventListener('click', () => {
    window.location.href = '../pages/next.html';
});
page3.addEventListener('click', () => {
    window.location.href = '../pages/next1.html';
});
