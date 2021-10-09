// node FirstFolderCreation.js --source=teams.json --dest=root 
// npm init 
// npm install minimist

let minimist = require("minimist");
let fs = require("fs");
let path = require("path"); // to make flder paths, never append slashes yourself
// use path.join

let args = minimist(process.argv);
// console.log(args.dest);
// console.log(args.source);
let teamsJSON = fs.readFileSync(args.source, "utf-8"); // yeh string ayeii ha hum kuch nhi kr skty!
let teams = JSON.parse(teamsJSON);

// console.log(teams.length);
for(let i=0; i<teams.length; i++){
    // fs.mkdirSync(args.dest + "/" + teams[i].team);
        let folderName = path.join(args.dest, teams[i].team);
        // console.log(folderName);
        fs.mkdirSync(folderName);
    }

