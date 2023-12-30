import express from "express";
const app = express();
const port =3000;

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders);
    // res.send("Hello world");
    res.send("<h1>HEY</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1><p>My name is Daksh</p>")
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Me</h1><p>My number is 1234567890</p>")
});

app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
});
