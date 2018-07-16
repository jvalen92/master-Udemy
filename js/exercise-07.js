'use strict '

//tablas de multiplicar de un numero ingresado por pantalla

var num = parseInt ( prompt ("Ingrese un numero para hacerle las tablas jeje XD") );

document.write("<h3>La tabla del " + num + " es </h3>")
for (let i = 0; i <= 10; i++) {
    var res = num*i;
    //document.writeln("<h4>"+ num + "X"+ i + "=" + res + "</h4>")
    document.writeln(num + "X"+ i + "=" + res + "</br>")
    
}