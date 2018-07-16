'use strict'

var num = parseInt ( prompt( "Ingrese un numero",0 ) );

var base =1;

document.write("<h3> Los numeros divisores de " + num + " Son: </h3>");
while (base <= num) {

    //un numero divide al otro si el residuo es cero
    if (num % base == 0) {
        document.writeln(base + "<br>");
    }
    base++;
}