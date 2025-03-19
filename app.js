let n=5;

for (let i = 0; i <n; i++) {
    console.log("Hello to ",i);
  }




let args=process.argv;
  
for (let i = 2; i < args.length; i++) {
    console.log("Hello to ", args[i]);
  }

 // in console pass arguments in node app.js krishna shardha rahul neha manisha


const someValue=require("./math");
console.log(someValue);

//in console pass arguments in node app.js



const math=require("./math");
console.log(math.sum(2,2));
console.log(math.PI);



const info = require("./Fruits");

console.log(info[0].name);



const figlet = require("figlet");   // in packages ./ not required

figlet("Hello World", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});



//import modules for math file

import { sum,PI} from "./math.js";

console.log(sum(2, 5));