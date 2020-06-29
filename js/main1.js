
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}
function redireccionar(){
    window.open("https://www.youtube.com/watch?v=LNlXNgb-Jus&list=RD6Iajw6YLS-0&index=6");
    //window.location.href = "https://www.youtube.com/watch?v=LNlXNgb-Jus&list=RD6Iajw6YLS-0&index=6";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1,  n2){
    return n1 + n2;
}

function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual e sua idade");
console.log(validarIdade(idade));
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/
/*
var d = new Date();
alert(d.getMonth());
alert(d.getYear());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/
/* 
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/
/*
var count =0;
while (count <= 5){
    console.log(count);
    count ++;
}
*/

/* var idade = prompt('qual e sua idade');
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

/* var lista = ["cambur", "manzana", "pera"];
lista.push("naranja");
console.log(lista)
*/
/*
var nome = "Angel Rojas";
var idade = 26;
alert("Bem vindo " + nome + " tiene " + idade + " anos");
*/