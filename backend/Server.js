const express = require('express');
const http = require('http');
const {Server}= require('socket.io');
const {v4: uuid}= require('uuid');

const app = express();  
const server = http.createServer(app)

const socketIo= new Server(server, {
    cors:{
        origin:"http://127.0.0.1:5000",
        methods:['GET','POST'],
    }
});

let todoList=[];




server.listen(5000,()=>{
    console.log(`Server Running at http://localhost:5000`);
    
})