var titulo;
var salaAtual;
var salaAnterior;
var modoGuia;

//declaracao dos objetos (divs).
var principal = {
    id:"#hub",
    salaPai: null
}
var radioTV = {
    id: "#radio-tv",
    salaPai: principal
}
var radio = {
    id:"#radio",
    salaPai: radioTV
}
var tv = {
    id:"#tv",
    salaPai: radioTV
}

var memorial = {
    id:"#memorial",
    salaPai : principal
}

var teatro = {
  id : "#teatro",
  salaPai : principal   
}

$("div").hide();

//funcao de inicializacao do  app;
function init() {
    $("#escolha").show(1000);
    $("#sim").click(function()
    {
        modoGuia = true;
        mostraHub();
    });
    
    $("#nao").click(function()
    {
        modoGuia = false;
        mostraHub();
    });
    
}
//funcao que mostra a sala principal. Talvez eu remova essa funcao no futuro.
function mostraHub()
{
        $("#escolha").hide();
        $("#voltar").hide();
        $("#hub").show();
        salaAtual = principal;
        salaAnterior = salaAtual;
}


//mostra o botao de Voltar
function mostraVoltar(){
    $("#voltar").show();
}


//esconde o botao de Voltar
function escondeVoltar(){
    $("#voltar").hide();
}

//funcao que muda a sala para a sala anterior.
function voltar()
{
    mudaSala(salaAnterior);
}

//funcao antiga. nao usar.
function mostraRadio()
{
    $("#area-radio-tv").hide();
    $("#radio").show();
    salaAnterior = "#area-radio-tv";
    salaAtual = radio;
    
}
//funcao antiga. nao usar.
function mostraTV(){
      $("#area-radio-tv").hide();
      $("#tv").show();
      salaAnterior = "#area-radio-tv";
      salaAtual = tv;
}

/*/
 *   mudaSala() é uma funcao que faz a troca de salas 
 *   na casa. Esconde os elementos da salaAtual e mostra
 *   os elementos do parametro a ser passado.   
 */
function mudaSala(sala)
{
    $(salaAtual.id).hide();
    salaAnterior = sala.salaPai;
    salaAtual = sala;
    
    $(sala.id).show();
    checaSala();
    
}

function checaSala(){
    if(salaAtual != principal)
       mostraVoltar();
    else
       escondeVoltar();   
}



$("#titulo").fadeIn(1000).fadeOut(1000,init);
$("#btn-memorial").click(function(){
    mudaSala(memorial);
});
$("#btn-radio-tv").click(function(){
    mudaSala(radioTV);
});
$("#btn-teatro").click(function(){
    mudaSala(teatro);
});

$("#btn-radio").click(function(){
    mudaSala(radio);
});

$("#btn-tv").click(function(){
    mudaSala(tv);
});
$("#voltar").find("button").click(voltar);
