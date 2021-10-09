// t1 = Read a file (disk)
// t2 = Calculate primes (cpu)
// t2 is done in parallel with t1
// node FirstCallback.js --source=big.data  --n=50000

function IsPrime(x){
    let isPrime = true;

    for(let div = 2; div <= x - 1; div++){
        if(x % div == 0){
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);


// task 1 area begins
let t1 = Date.now();
console.log("Starting task1 at " + t1 % 100000);

// let data = fs.readFileSync(args.source);
fs.readFile(args.source, function(err, data) {
    if(err==null){
        let t2 = Date.now();
        console.log("Finishing task1 at " + t2 % 100000);
        console.log(t2 - t1);}
    else{
        console.log("Error");
   }    
})
// task 1 area ends

// task2
let t3 = Date.now();
console.log("Starting task2 at " + t3 % 100000);

// task2 -> primes
let arr = [];
for(let i = 2; i < args.n; i++){
    let isPrime = IsPrime(i);
    if(isPrime == true){
        arr.push(i);
    }
}

let t4 = Date.now();
console.log("Finishing task2 at " + t4 % 100000);
console.log(t4 - t3);
// task2









