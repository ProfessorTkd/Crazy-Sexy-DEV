let parser = require('minimist');
let args = parser(process.argv);

// console.log(args);
let name = args.name;
let age = args.age;

if (age > 30){
    console.log("Hello " + name + ". You must go Home!");
}else{
    console.log("Hellu " + name + ". Where is the party tonight!");
}