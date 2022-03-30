function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    
        if(elemento != null && elemento.localName === 'audio'){
            elemento.play();
        }else{ 
            (elemento === null) 
            console.log('Elemento ou seletor não encontrado');
        }
}
document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;


for (let contador = 0; contador < listaDeTeclas.length ; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    

    // navegação teclado 
    tecla.onkeydown = function (evento){

        console.log(evento.code);
        if (evento.code === 'Space'||evento.code ==='Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');

    }
        
    };

}
