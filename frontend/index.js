

const socket =io('http://localhost:5000/todo');

const todoItemInput = document.getElementById('todoItemInput');
const addTodo = document.getElementById('addTodo');
const todolist = document.getElementById('todolist');

socket.on('update',(todoItems)=>{
   
    todolist.innerHTML='';
    todoItems.forEach(item =>{
        const li = document.createElement('li');
        li.innerText=item.value;
        todolist.appendChild(li)
    })
    
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

