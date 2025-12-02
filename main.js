functiontocaSom(idElementoaudio)
const elemento=document.querySelecetor(idElementoidaudio);
if (elemento && elemento.localName==='audio'){
elemento.play();
}else{

const listaDeTeclas=document.querySelectorAll(".tecla");






for(let contador=0.; contador <listaDeTeclas.legntgh,contador++)
consttecla=listaDeTeclas[contador];
const efeito=tecla.classList[1];
const idaudio='#som_${efeito}';
tecla.onclick=function(){
tocaSom(idAudio);
}
}
tecla.onkeydown=function(evento){
if(evento.code==='space')
tecla.calssList,add('ativa');
}

telcaonkeydown=function(evento){
if(evento.code==='Enter')
tecla.classList.add('ativa');
}