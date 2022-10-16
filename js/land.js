var prev = document.querySelector('.prev');
var after = document.querySelector('.after');
var slide = document.querySelector('.flex_display');
var  submit = document.querySelector('.email');
var modal = document.querySelector('.thanks');
var mobile_select = document.querySelector('.mobile_menu');
var mobile_menu = document.querySelector('.mobile');
var close = document.querySelector('.close');
var list_request = document.querySelectorAll('.mobile ul li a');
var x = 0;

prev.addEventListener('click',(e)=>{
        x = x - 400;//Remove 4000 da coordenada x
        
        if(x<0){//Verifica tamanho minimo de x
            x = 0;
        }
        slide.scroll(x,0);//Desloca a scrollbar no eixo X
})


after.addEventListener('click',(e)=>{
        x = x +400;//Adiciona 4000 a coordenada x
        
        if(x>(400*3.2)){//Verifica o tamanho máxmio de x
            x = (400*3.2);
        }
        slide.scroll(x,0);//Desloca a scrollbar no eixo X
})


mobile_select.addEventListener('click',(e)=>{
        mobile_menu.style.display = 'block';//seleciona o elemento e estilo no html
        setTimeout(()=>{//define delay da animação
            mobile_menu.style.opacity ='1';//configura a opacidade para 1
        },050);
        
        mobile_select.style.display = 'none';//configura o display para o elemento não aparecer na tela
})

close.addEventListener('click',(e)=>{
    if(close==e.target){//Verifica se o elemento da condição é alvo do cursor
        mobile_menu.style.display = 'none';//seleciona o elemento e estilo no html
        setTimeout(()=>{
            mobile_menu.style.opacity ='0';//configura a opacidade para 0
        },500);
        mobile_select.style.display = 'block';//configura o display para o elemento aparecer na tela
    }
})

for(var i=0;i<list_request.length;i++){//Inicio fluxo de repetição para selecionar o array de elementos
    list_request[i].addEventListener('click',(e)=>{//Adiciona evento de clique
        for(var j=0;j<list_request.length;j++){//Segundo fluxo para aplicar estilização nos elementos
            setTimeout(()=>{//define delay da animação
                mobile_menu.style.opacity ='0';//configura a opacidade para 0
            },500);
        if(list_request[j]==e.target){//Verifica se o elemento da condição é alvo do cursor
            mobile_menu.style.display = 'none';//configura o display para o elemento não aparecer na tela
            mobile_select.style.display = 'block';//configura o display para o elemento  aparecer na tela
        }
    }
    })
}

