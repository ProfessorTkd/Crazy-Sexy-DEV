let clargs = process.argv;
let n = parseInt(clargs[2]);

let isPrime = true;
// loop
for(let div = 2; div * div <= n; div++) {
    if(n % div === 0){
        isPrime = false; 
        break;
    }
}

// condition
if(isPrime == true){
    console.log(n + " is Prime");
}else{
    console.log(n + " is not Prime");
}