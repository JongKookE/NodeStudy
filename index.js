const express = require('express'); // express를 가져와 변수에 저장
const app = express(); // express를 싱행한 값을 app에 저장
const http = require('http'); // 서버의 정보
const server = http.createServer(app); 
const { Server } = require("socket.io");
const io = new Server(server);
const bodyParser = require("body-parser");


app.use(express.static("assets"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post("/post", (req, res) => res.send("<h1>Welcome! </h1>" + req.body.input));

app.get("/slime", (req, res) => res.sendFile(__dirname + "/assets/slime.png"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/simple_form.html")
});
  

io.on('connection', (socket) => {
  console.log(socket.id, "is Connected");
  socket.on("disconnect", () => console.log("user disconnect"));
  socket.on("chat message", (msg) => {
    console.log('message: ' + msg);
  })
});

io.on("connection", (socket) =>{
  //  socket.broadcast.emit("hi")
   socket.on("chat message", (msg) =>{
    io.emit("chat message", msg);
   });

   socket.on("disconnect", () => console.log("Disconnected"))
  });


server.listen(3000, () => {
  console.log('listening on *:3000');
});