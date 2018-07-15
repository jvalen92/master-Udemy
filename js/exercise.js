'use strict'
/*
    given two numbers you have to show which number is greatter, less or equals if they are.
*/

var num1= prompt("input the first number",0);
var num2= prompt("input the second number",0);

if (num1>num2) {
    alert("num1 is gratter");
}else if (num1==num2){
    alert("are equals");
}else{
    alert("num2 is greatter than num1");
}