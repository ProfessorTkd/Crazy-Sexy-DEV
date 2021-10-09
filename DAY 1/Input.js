// let args = process.argv;
// console.log(args);

// let i = args[2];
// console.log(i);
   

// let cmdlineargs = process.argv;
// console.log(cmdlineargs[0]);
// console.log(cmdlineargs[1]);
// console.log(cmdlineargs[2]);
// console.log(cmdlineargs[3]);
// console.log(cmdlineargs[4]);
let cmdlineargs = process.argv;
let i = cmdlineargs[2];
console.log("i is =" + i);
console.log("i is a =" + typeof i);
i = i + 30;
console.log("value of i =" + i);

// let j = parseInt("200",10);
// console.log(j);
// console.log(typeof j);
// j = j + 30;
// console.log(j);

let k = parseInt(cmdlineargs[3],10);
console.log("k is =" + k);
console.log("k is a =" + typeof k);
k = k + 30;
console.log("value of k =" + k);

