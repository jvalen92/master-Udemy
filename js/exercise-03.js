'use strict'

//mostrar los numeros entre dos numero dados por el usuario 

var num1 = parseInt( prompt("ingresa el primer numero",0));
var num2 = parseInt( prompt("ingresa el segundo numero",0));

if (isNaN(num1)){
    num1=0;
}

if (isNaN(num2)){
    num2=0;
}

//escibe un encabezado con formato html pero con las variables de js!!
document.write("<h3>Desde "+ num1+" hasta " + num2 + " hay estos numeros: </h3>");

var base =num1 +1 ;
while (base<num2) {
    document.writeln(base+"<br>");
    base++;
}