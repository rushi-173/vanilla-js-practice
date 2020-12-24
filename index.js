rSync = require("readline-sync");

function show(str){
  console.log(str);
}

let name = rSync.question("Enter your name : ")
show(name);

