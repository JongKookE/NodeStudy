import express from 'express';
import { createServer } from "node:http";
import { fileURLToPath } from 'node:url';
import {dirname, join } from 'node:path';
import { Server } from 'socket.io';

// "type":"module"이 반드시 필요
// package.json dependencies 위에 기입해줘야함

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res)=> res.sendfile(join(__dirname, "tutorial_index.html")))

io.on('connection', (socket) => {
    socket.on('chat message', (nickname, msg) => {
        console.log(`${nickname} : ${msg}`)
        io.emit("chat message", nickname , msg);
    })
    socket.broadcast.emit("hi");
});


server.listen(3000, () => 
    console.log('server running at http://localhost:3000')
);