function mostrarNome(){
    var Nome = document.getElementById('pNome' ).value;
    var Sobrenome = document.getElementById('pSobrenome').value;
    var NomeCompleto = Nome + ' ' + Sobrenome;
    alert('Olá'+NomeCompleto);
}

let valor1;
let valor2;
let resultado;
function somar(){
    valor1 = document.getElementById('pvalor1').value;
    valor2 = document.getElementById('pvalor2').value;
    resultado = parseInt(valor1)+ parseInt(valor2);
    if(valor1==""||valor2==""){
        alert ("Preencha todos os Campos");
}else{
    alert ("Resultado da Soma é" +resultado);
}
function sub(){
    valor1 = document.getElementById('pvalor1').value;
    valor2 = document.getElementById('pvalor2').value;
    resultado = parseInt(valor1)- parseInt(valor2);
    if(valor1==""||valor2==""){
        alert ("Preencha todos os Campos");
}else{
    alert ("Resultado da Subtração é" +resultado);
}
}
function mult(){
    valor1 = document.getElementById('pvalor1').value;
    valor2 = document.getElementById('pvalor2').value;
    resultado = parseInt(valor1)*parseInt(valor2);
    if(valor1==""||valor2==""){
        alert ("Preencha todos os Campos");
}else{
    alert ("Resultado da Multiplicação é" +resultado);
}
}  
function div(){
    valor1 = document.getElementById('pvalor1').value;
    valor2 = document.getElementById('pvalor2').value;
    if(valor1==""||valor2==""){
        alert ("Preencha todos os Campos");
    }else if(valor2==0)
    alert("Não Podemos Dividir por ZERO")
    resultado = parseInt(valor1)+ parseInt(valor2);
    alert ("Resultado da Divisão é" +resultado);
}
}
