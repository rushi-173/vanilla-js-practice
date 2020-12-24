rSync = require("readline-sync");

// function show(str){
//   if(str == "rushi"){
//     console.log("welcome! Master")
//   }
//   else{
//     console.log("get out from here")
//   }
// }

// let name = rSync.question("Enter your name : ")
// show(name)

// let num = 12;
// if(num % 2 == 0){
//   console.log("Even")
// }
// else{
//   console.log("Odd");
// }

function isPrime(num){
  let flag = 1;
  for(let i = 2; i<num; i++){
    if(num%i==0){
      flag = 0;
    }
  }
  return flag;
}

obj = {
  name : "rushi",
  std : "btech",
  div : "it"
}


let arr = Object.keys(obj)
console.log(obj['name'])
let i = 0;
for(i=0;i<arr.length;i++){
    console.log(arr[i] + " = " + obj[arr[i]]);
}
