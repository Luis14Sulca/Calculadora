'use strict'
var numero = "";
var resultado = 0;
var temporal = "";
var realizar = "";
function resetear(){
    $("#resultado").val("");
    numero = "";
    resultado = 0;
    temporal = "";
    realizar = "";
}
function calcular(){
    switch(realizar){
        case "+" :
            resultado = resultado + parseFloat(numero);
            break;
        case "-" :
            resultado = resultado - parseFloat(numero);
            break;
        case "*" :
            resultado = resultado * parseFloat(numero);
            break;
        case "/" :
            resultado = resultado / parseFloat(numero);
            break;
        
    }
    numero = parseFloat(resultado);
    temporal="";
        
}
function operacion(valor){
    realizar = valor;
    resultado = parseFloat(numero);
    
    $("#resultado").val("");
   
    temporal = "";  
}
function resul(){
    $("#resultado").val("");
    $("#resultado").val(resultado);
    if(isNaN(numero)){
        $("#resultado").val("indeterminado");
    }
    
}
function numeros(num){
    temporal = temporal + num;
    numero = temporal;
    $("#resultado").val(numero);
    if(realizar != ""){
        calcular();
    }
}
