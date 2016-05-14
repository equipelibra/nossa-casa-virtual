var sala1 = document.getElementsByTagName("li")[0];
var sala2 = document.getElementsByTagName("li")[1];
var sala3 = document.getElementsByTagName("li")[2];

var texto = document.getElementById("salaAtual");

var salaAtual = "Principal";
var padrao = texto.innerHTML;
mudaTexto(salaAtual);

sala1.onclick = function (params) {
    mudaTexto("1");
}

sala2.onclick = function (params) {
    mudaTexto("2");
}

sala3.onclick = function (params) {
    mudaTexto("3");
}


function mudaTexto(str) {
    texto.innerHTML = padrao + str;
}