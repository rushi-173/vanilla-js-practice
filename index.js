readline = require("readline-sync");
const obj = {
  "a" : 1,
  "b" : 45,
  ram: 56
}
function printObj(){
  console.log(obj["a"], obj["ram"]);
}

//const n= readline.question("Enter number : ");
printObj();

