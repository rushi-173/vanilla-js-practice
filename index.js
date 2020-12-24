readline = require("readline-sync");

function isFive(num){
  console.log("Hello World");
  if(num==5){
    console.log("The number is 5");
  }
  else{
    console.log("The number is not 5");
  }
}

const n= readline.question("Enter number : ");
isFive(n);

