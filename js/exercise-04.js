'use strict'

//mostrar los numero impares entre dos numero introducidos por teclado

var num1= parseInt (prompt ("Ingrese el primer numero",0) );
var num2= parseInt (prompt ("Ingrese el segundo numero",0) );

if (isNaN(num1)) {
    num1=0;
}

if (isNaN(num2)){
    num2=0;
}

document.write(" <h3> Los numero impares entre "+ num1 + " y " + num2 + " son: </h3> ");
var base=num1 +1;
while (base < num2) {
    //un numero es impar cuando no es multiplo de 2
    if (base%2 !=0) {
        document.writeln(base + "<br>");
    }
    base++;
}