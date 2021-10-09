let clargs = process.argv;
let n = parseInt(clargs[2]);

let arr = [];     //array declaration   no need to tell the size of the array

for (let i = 0; i < n; i++) {
    let val = parseInt(clargs[i+3]);
    arr.push(val);  //arr[i]=val;
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr);
console.log(arr.length);