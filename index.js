readline = require("readline-sync");

function printOdd(num){
  let i=0;
  for(i=0; i<num; i++){
    if(i%2!=0){
      console.log(i);
      console.log(" ");
    }
  }
}

const n= readline.question("Enter number : ");
printOdd(n);

