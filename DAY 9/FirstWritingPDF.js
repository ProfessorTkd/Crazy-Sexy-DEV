// npm install pdf-lib
// node FirstWritingPDF.js --source=teams.json --dest=Worldcup

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib"); // new

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest); // Making destination folder

for(let i = 0; i < teams.length; i++){
    let teamFN = path.join(args.dest, teams[i].team);
    fs.mkdirSync(teamFN);

// har match ke liye pdf likhni ha
    for(let j = 0; j < teams[i].matches.length; j++){
        let matchFileName = path.join(teamFN, teams[i].matches[j].vs + ".pdf");
        createScoreCard(teams[i].team, teams[i].matches[j], matchFileName);
    }
}
// template ko banake load krengy
// word.doc banayengy template.pdf fir lib se load krengy template
// fir save krdo wapis

function createScoreCard(teamName, match, matchFileName){
 // this fn creates pdf for match in appropriate folder with correct details
 // here we will use pdf-lib to create the pdf
}
