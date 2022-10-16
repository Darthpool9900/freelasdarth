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
        x = x - 400;//Remove 80 da coordenada x
        
        if(x<0){//Verifica tamanho minimo de x
            x = 0;
        }
        slide.scroll(x,0);//Desloca a scrollbar no eixo X
})


after.addEventListener('click',(e)=>{//Adiciona 80 a coordenada x
        x = x +400;
        
        if(x>(400*3.2)){//Verifica o tamanho máxmio de x
            x = (400*3.2);
        }
        slide.scroll(x,0);//Desloca a scrollbar no eixo X
})


mobile_select.addEventListener('click',(e)=>{
        mobile_menu.style.display = 'block';
        setTimeout(()=>{
            mobile_menu.style.opacity ='1';
        },050);
        
        mobile_select.style.display = 'none';
})

close.addEventListener('click',(e)=>{
    if(close==e.target){
        mobile_menu.style.display = 'none';
        setTimeout(()=>{
            mobile_menu.style.opacity ='0';
        },500);
        mobile_select.style.display = 'block';
    }
})

for(var i=0;i<list_request.length;i++){
    list_request[i].addEventListener('click',(e)=>{
        for(var j=0;j<list_request.length;j++){
            setTimeout(()=>{
                mobile_menu.style.opacity ='0';
            },500);
        if(list_request[j]==e.target){
            mobile_menu.style.display = 'none';
            mobile_select.style.display = 'block';
        }
    }
    })
}

