const webSocket = require('ws');
const wss = new webSocket.Server({ port : 5000 });

wss.on('connection', ws =>{
    console.log(`new Client Connected , total no of Client ${wss.clients.size}`);
    ws.send("Welcome to the Web Socket Server");
    
    ws.on('message',(message)=>{
        console.log(`Received from Client ${message}`);
        ws.send(`Server response: you send -> ${message}`)
        
    });

    setTimeout(() => {
         ws.send(`Totally there are`+wss.clients.size+`Client Connected to the Server`);
    }, 5000);

    ws.on('close',()=>{`Client disconnected, total no of Clients :${wss.clients.size}`});
})

console.log(`WebSocket Server is Running on ws://localhost:5000`);
