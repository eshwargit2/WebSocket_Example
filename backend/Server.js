const { log } = require('console');
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

const NameSpace=socketIo.of('/todo');
NameSpace.on("connection",(socket)=>{
  console.log('new connection established');
  
  socket.emit('update',todoList);

  socket.on('newItem',(item)=>{
    const todoItem = {id:uuid(), value:item};
    todoList.push(todoItem);
    NameSpace.emit("update", todoList);
  });

  socket.on('updateItem',(itemObj)=>{
    const index = todoList.findIndex((item)=>item.id===itemObj);
    if(index!==1){
        todoList[index].value=itemObj.value;
         NameSpace.emit("update", todoList);
    }
  });

  socket.on('deleteItem',(id)=>{
    todoList= todoList.filter(x=>x.id!==id);
      NameSpace.emit("update", todoList);
  });

  socket.on('disconnect',()=>{
     console.log('Client Disconnect');
  })

});


server.listen(5000,()=>{
    console.log(`Server Running at http://localhost:5000`);
    
})