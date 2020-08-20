//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Im from bangladesh.Currently I live in Tangail. Im a student ";
const aboutContent = "";
const contactContent = "facebook page";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/",(req, res)=>{
  
   res.render('home',{startingContent:homeStartingContent})
})
app.get('/about',(req,res)=>{
  res.render('about',{about:aboutContent})
})

app.get('/contact',(req,res)=>{
  res.render('contact',{contact:contactContent})
})







app.listen(3000, function() {
  console.log("Server started on port 3000");
});
