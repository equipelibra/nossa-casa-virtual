var texto = document.getElementById("texto");
var padrao = texto.innerHTML;

var voltar = document.getElementById("voltar");

var principal = {
    elemento:document.getElementById("principal"),
    filhos:[],
    pai:null,
    desc:"Principal"
}


var sala1 = {
    elemento:document.getElementById("sala1"),
    filhos:[],
    pai:principal,
    desc:"Sala 1" 
}

var sala2 = {
    elemento:document.getElementById("sala2"),
    filhos:[],
    pai:principal,
    desc:"Sala 2"    
}

var sala3 = {
    elemento:document.getElementById("sala3"),
    filhos:[],
    pai:principal,
    desc:"Sala 3"    
}


principal.mudaSala = function(){
    mudaTexto(principal.desc);
    salaAtual = principal;
    
}
principal.elemento.onclick = principal.mudaSala;

sala1.mudaSala = function(){
    mudaTexto(sala1.desc);
    salaAtual = sala1;
    
}
sala1.elemento.onclick = sala1.mudaSala;

sala2.mudaSala = function(){
    mudaTexto(sala2.desc);
    salaAtual = sala2;
    
}
sala2.elemento.onclick = sala2.mudaSala;

sala3.mudaSala = function(){
    mudaTexto(sala3.desc);
    salaAtual = sala3;
    
}
sala3.elemento.onclick = sala3.mudaSala;
var salaAtual = principal;
voltar.onclick = retorno;


function mudaTexto(str) {
    texto.innerHTML = padrao + str;
}

function retorno() {
    if(salaAtual.pai != null)
        salaAtual = salaAtual.pai;
        mudaTexto(salaAtual.desc);
        
}