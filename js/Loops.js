'use strict'

//for loop

for (let index = 0; index < 10; index++) { //index, condition, setup index
    //run this

    console.log(index)

    //see the variables's values in the debugger console in chrome
    //debugger;
}

console.log("-------------------------While expamle---------------------");

//while loop:
var index=10;

while (index>=0) { //condition
    //run this

    console.log(index); 

    //setup index
    index--;    
}

console.log("-------------------------Break example-------------------------");

//break loop
var year = 2018;
while (year != 1991) {
    console.log("we are on year "+year);

    if (year==2000) {
        break   //if year is 2000, break the loop
    }

    year--;
}

console.log("---------------------------Do While loop--------------------");
//Do While
var years = 30;
do {
    alert("only when years is not 20, your age is "+years);
    years--;
} while (years >= 25);





