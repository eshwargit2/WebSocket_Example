

const socket =io('http://localhost:5000/todo');

const todoItemInput = document.getElementById('todoItemInput');
const addTodo = document.getElementById('addTodo');
const todolist = document.getElementById('todolist');

socket.on('update',(todoItems)=>{
    console.log(todoItems);
    
})


addTodo.onclick=addItem;

function addItem(){
 const input= todoItemInput.value;
 if(input){
    socket.emit('newItem',input);
    todoItemInput.value='';
 }
 
}
function updateItem(){

}

function deleteItem(){

}

