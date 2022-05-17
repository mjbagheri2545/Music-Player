let title = document.querySelector("#name");
let picture = document.querySelector("#picture");
let line = document.querySelector("#line");
let backward = document.querySelector("#backward");
let play = document.querySelector("#play");
let forward = document.querySelector("#forward");
let musics = [
    {
        name : 'Khob Be Darak',
        img : 'image/index1.jpg',
        audio : new Audio('./music/music1.mp3'),
    },
    {
        name : 'Beman',
        img : 'image/index2.jpg',
        audio : new Audio('./music/music2.mp3')
    },
    {
        name : 'Ghahreman',
        img : 'image/index3.jpg',
        audio : new Audio('./music/music3.mp3')
    }
    

]
let currentMusic = 0;
let audio = musics[currentMusic].audio ;
title.innerText = musics[currentMusic].name;
picture.src = musics[currentMusic].img;
audio.addEventListener('canplay',(e)=>{
    line.max = audio.duration;

})
audio.addEventListener('timeupdate',(e)=>{
    line.value = audio.currentTime;
})
line.addEventListener('input',(e)=>{
    audio.currentTime = line.value;
})
play.addEventListener('click',(e)=>{
    if(play.classList.contains('fa-play')){
    audio.play();
    play.classList.replace('fa-play','fa-pause');
    picture.style.animationPlayState = 'running';
    }else{
    audio.pause();
    play.classList.replace('fa-pause','fa-play');
    picture.style.animationPlayState = 'paused';
    }
})
backward.addEventListener('click',(e)=>{
    changeMusic('pre');
})
forward.addEventListener('click',(e)=>{
    changeMusic('next');
})


function changeMusic(state){
    if(state == 'pre'){
        audio.pause();
        line.value = '0';
        picture.style.animationPlayState = 'paused';
        play.classList.replace('fa-pause','fa-play');
        audio.currentTime = 0;
    if(currentMusic == 0){
        currentMusic = musics.length -1;
    }else{
        currentMusic-=1;
    }
    }else{
        audio.pause();
        line.value = '0';
        picture.style.animationPlayState = 'paused';
        play.classList.replace('fa-pause','fa-play');
        audio.currentTime = 0;
        if(currentMusic == musics.length -1){
            currentMusic = 0;
        }else{
            currentMusic+=1;
        }
    }
    audio = musics[currentMusic].audio ;
    title.innerText = musics[currentMusic].name;
    picture.src = musics[currentMusic].img;
    audio.addEventListener('canplay',(e)=>{
        line.max = audio.duration;
    
    })
    audio.addEventListener('timeupdate',(e)=>{
        line.value = audio.currentTime;
    })
}

