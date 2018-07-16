'use strict'
//sumar todos los numeros y calcular la media hasta que se inserteun numero negativo

var sum =0;
var media=0;

var num = parseInt( prompt("introduce un numero positivo",0));
for (let i = 0; num > 0 ; i++) {
    num = parseInt( prompt("ingrese un numero positivo",0));
    sum=sum+num;
    media=sum/i;
}

alert("El resultado es "+sum +" y la media es "+ media);
 