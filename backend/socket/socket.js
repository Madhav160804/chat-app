import { Server } from 'socket.io'
import http from 'http'
import express from 'express'

const app = express()
console.log(app)

const server = http.createServer(app)
const io = new Server(server,{
    cors: {
        origin: ["http://localhost:4000"],
        methods: ["GET", "POST"]
    },
})

export const userSocketMap = {};// {userId: socket};

io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);

    const userId = socket.handshake.query.userId;
    // console.log(socket);
    if(userId !== 'undefined'){
        userSocketMap[userId] = socket;
    }

    // io.emit() is used to send events to all the connected clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
    // console.log(userSocketMap)

    // socket.emit('receiveMessage', )

    // socket.on() is used to listen to the events. can be used on both cliend and server side
    socket.on('disconnect',()=>{
        console.log('user disconnected',socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap))
    });
});

export {app,io,server}