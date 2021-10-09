// read a file, capitalize every word, write the file

// node FirstFiles2.js --source=f3.txt --dest=f4.txt

let minimist = require("minimist");
let args = minimist(process.argv);

let fs = require("fs");
let stext = fs.readFileSync(args.source, "utf-8");
console.log(stext); // source file se read kiya

let words = stext.split(" ");
console.log(words); //har word ko alag alag krkey array banake dediya!

for (let i = 0; i < words.length; i++){
    words[i] = words[i].toUpperCase();     
    // uppercase me convert krdiya har ek word ko jis jis ko alag kiya humne!
}

let dtext = words.join(" "); // har word jo alag kiya fir uppercase me convert krdiya unko ab join krdia!
fs.writeFileSync(args.dest, dtext, "utf-8"); //fir dest file me bejdia!
