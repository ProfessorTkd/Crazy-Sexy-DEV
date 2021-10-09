// npm install axios
// npm install minimist
// node FirstWebDownload.js --dest="download1.html" --url="https://www.pepcoding.com/" 
// node FirstWebDownload.js --dest="download2.html" --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" 

let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");
let args = minimist(process.argv);
// console.log(args.url);
// console.log(args.dest);

let dldPromise = axios.get(args.url);
dldPromise.then(function(response) {
    let html = response.data;
    fs.writeFileSync(args.dest, html,"utf-8");
}).catch(function(err){
    console.log(err);
});