const express = require("express");
const bodyParser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded( {extended:true}));
app.use(bodyParser.json())

mongoClient

app.get("/", function(req,res){
    res.sendFile(__dirname + "/idex.html")
})

app.post("/someuserdata", function (req,res){
    console.log("Wyslano formularz")
    console.log(req.body)
})

app.get("/blog/full-stack-developer-vs-mean-stack-developer", function(req,res){
    res.send("Strona porownujaca full stack do mean stack")
})

app.get("/Gosia", function(req,res){
    res.sendFile(__dirname + "/idex.html")
})


app.listen(port, (err) => {
if (err) { return console.log(`blad: ${err}`)}
console.log(`Serwer dziala na porcie ${port}`)

})