var prev = document.querySelector('.prev');
var after = document.querySelector('.after');
var slide = document.querySelector('.flex_display');
var name = document.querySelector('.name');
var text = document.querySelector('.text');
var x = 0;

prev.addEventListener('click',(e)=>{
        x = x - 400;//Remove 80 da coordenada x
        
        if(x<0){//Verifica tamanho minimo de x
            x = 0;
        }
        slide.scroll(x,0);//Desloca a scrollbar no eixo X
})


after.addEventListener('click',(e)=>{//Adiciona 80 a coordenada x
        x = x +400;
        
        if(x>(400*3)){//Verifica o tamanho máxmio de x
            x = (400*3);
        }
        slide.scroll(x,0);//Desloca a scrollbar no eixo X
})




