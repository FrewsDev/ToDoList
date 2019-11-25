let todoList = [];
const toDoBtn = document.querySelector('#todoBtn');
let toDoText = document.querySelector('#todo');
let todoListHTML = document.querySelector('.body');

toDoBtn.addEventListener("click", () => {
    addTodo(toDoText.value);
});

toDoText.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        addTodo(toDoText.value);
    }
})

renderTodoList();   

function addTodo(todo) {
    todoList.push(todo);
    toDoText.value = "";
    todoListHTML.innerHTML += '<label><input type="checkbox"><i></i><span>' + todo + '</span></label>';
}

function renderTodoList() {
    todoList.map(todo => {
        todoListHTML.innerHTML += '<label><input type="checkbox"><i></i><span>' + todo + '</span></label>';
    });    
}