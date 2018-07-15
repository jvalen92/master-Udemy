'use strict'

//if flow example

var age=19;
var name="sebas";

if (age>=18) {
    //do this
    console.log(name+" is "+age+" ,you are of legal age");

    if (age <= 33) {
        console.log("you are still a millenial");
    }else if(age >= 70) {
        console.log("you are an older man!!");

    }else{
        console.log("you are not stiil a millenial");
    }
}else{
    console.log("you are not of legal age");
}

//switch flox example
console.log("-------------------Switch example----------------------------")
age =18;
var str="";

switch (age) {
    case  18:
        str="you are of legal age"
        break;

    case  25:
        str="you are an adult";
        break;

    case  40:
        str="you are in 40th crisis"
        break;

    default:
        str="your age is neutral";
        break;
}

console.log(str);
