var load = document.querySelector('.loading');

window.addEventListener('load',()=>{
    load.style.display = 'none';
    var shoot = document.querySelector('.shoot');
    var mob = document.querySelector('.newMob');
    var point = 0;
    var timer = 10000;


setInterval(()=>{
     var bomber = document.createElement('div');
     bomber.className = 'bomber';
     var gameCanvas = document.querySelector('.game');
     var gameover = new Audio('resources/gameover.wav');
     

     gameCanvas.appendChild(bomber).addEventListener('click',()=>{
          document.querySelector('.gameover').style.display = 'flex';
          gameover.play()
     });


     bomber.style.left = Math.floor(Math.random()*90)+'%';


     setTimeout(()=>{
          gameCanvas.removeChild(bomber);
          
     },10000);
 },1000);



 setInterval(()=>{
     var mob = document.createElement('div');
     mob.className = 'newMob';
     var gameCanvas = document.querySelector('.game');
     var coinCont = new Audio('resources/explode.wav');

     gameCanvas.appendChild(mob).addEventListener('click',()=>{
          console.log('mob clicked');
          point++;
          gameCanvas.removeChild(mob);
          coinCont.volume = 0.2;
          coinCont.play();
          document.querySelector('.gametitle h1').innerText = "Pontuação: " + point;
     });

     mob.style.left = Math.floor(Math.random()*90)+'%';

     setTimeout(()=>{
          gameCanvas.removeChild(mob);
     },10000);
 },500);


})

//how to make colission in javascript
//https://www.youtube.com/watch?v=dQw4w9WgXcQ
