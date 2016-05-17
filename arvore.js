var texto = document.getElementById("texto");
var padrao = texto.innerHTML;



function Node(data,desc) { //classe criadora de Pontos na arvore.
    this.data = data; //aqui vai o elemento HTML
    this.parent = null; //pai do nó
    this.children = []; //filhos do nó
    this.desc = desc; //pequena descricao do nó

    
    //funcao que adiciona um filho ao nó, criando um completamente novo
    this.add = function(child,desc){ 
        this.children.push(new Node(child,desc));
        this.children[this.children.length-1].parent = this;
    }
    
    //adiciona um nó já existente.
    this.addNode = function(node){
        this.children.push(node);
        this.children[this.children.length-1].parent = this;
    }

    //funcao que muda o texto "você está na sala:" pela descricao da sala;
    this.mudaSala = function(){       
        
        salaAtual = desc;
        nodeAtual = new Node(this.data,this.desc);
        texto.innerHTML = padrao+salaAtual;
        
    }
    //adiciona o evento CLICK ao elemento HTML (data)
    this.data.onclick = this.mudaSala;
    
    
}
//é a raiz da árvore. Ainda nao sei a funcionalidade pra essa classe (:

function Tree(data,desc) {
    var node = new Node(data,desc);
    this._root = node;
}


var arvore = new Tree(document.getElementById("principal"),"Principal");

var salaAtual = "Principal";
var nodeAtual = null;
texto.innerHTML = padrao+salaAtual;


var sala1 = new Node(document.getElementById("sala1"),"Sala 1");
var sala2 = new Node(document.getElementById("sala2"),"Sala 2");
var sala3 = new Node(document.getElementById("sala3"),"Sala 3");

var sala1_children = new Node(document.getElementById("sala1-children"));
var sala2_children = new Node(document.getElementById("sala2-children"));
var sala3_children = new Node(document.getElementById("sala3-children"));

sala1.addNode(sala1_children);
sala2.addNode(sala2_children);
sala3.addNode(sala3_children);

arvore._root.addNode(sala1);
arvore._root.addNode(sala2);
arvore._root.addNode(sala3);

var voltar = document.getElementById("voltar");
retorno = function()
{
    if(nodePosterior !=undefined)
    {
        nodePosterior.mudaSala;
    }
}
voltar.onclick = retorno;