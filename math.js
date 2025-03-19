const sum =(a,b) => a+b;

const mul =(a,b) => a*b;

const g=9.8;

const PI=3.14;

module.exports=123;


let obj={
    sum:sum,
    mul:mul,
    g:g,
    PI:PI,

};

module.exports=obj;

//or this could be valid


module.exports={
    sum:sum,
    mul:mul,
    g:g,
    PI:PI,

};

module.exports.sum =(a,b) => a+b;

module.exports.mul =(a,b) => a*b;

module.exports.g=9.8;

exports.PI=3.14;

module.exports=5;

exports=5; // this could not be valid in js



//import modules last one:

export const sum = (a,b) => a+b;
export const mul = (a,b) => a*b;
export const g = 9.8;
export const PI = 3.14;