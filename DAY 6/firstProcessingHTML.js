// node firstProcessingHTML.js --source=download.html
// npm install minimist
// npm install jsdom
let minimist = require("minimist");
let fs = require("fs");
let jsdom = require("jsdom"); 
 // will load html and help find information.
 let args = minimist(process.argv);

 fs.readFile(args.source, "utf-8", function(err, html){

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

     // broswser reads the html sent by server and presents a view and create a object.
     // DOM is an object tree which is create by browser for the programmer, and programmer can interact with the view of the document using DOM.
     let descs = document.querySelectorAll("div.match-info > div.description");
    // we will get all div's with class description whose parent is a div with class match-info
    for(let i = 0; i < descs.length; i++){
        console.log(descs[i].textContent);
    }

 })