 //const { log } = require("console");
const fs = require("fs");
// const { log } = require("util");

//  fs.writeFile("message.txt","HELLO FROM NODE JS",(err)=> {
//     if(err) throw err;
//     console.log("The file has been saved");
//  });

 fs.readFile("./message.txt","utf8",(err,data)=>{
   if(err) throw err;
   console.log(data);
 });