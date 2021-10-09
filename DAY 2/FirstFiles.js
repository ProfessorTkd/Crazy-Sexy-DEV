// node FirstFiles.js --source=f1.txt --dest=f2.txt

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

//read from the source files
let stext = fs.readFileSync(args.source, "utf-8");
//capitalize 
let dtext = stext.toUpperCase();
//write  files to dest file
fs.writeFileSync(args.dest, dtext,"utf-8");
