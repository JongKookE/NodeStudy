const express = require("express");
const mysql = require("mysql2")
const dbconfig = require("./config/mysql.js")
const connection = mysql.createConnection(dbconfig)

const app = express();
const port = 3000

app.use(express.static("assets"))

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/assets/main.html")
})

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/assets/main.html")
})

app.listen(port, ()=>{
    console.log("NodeJS Server is Success!")
})