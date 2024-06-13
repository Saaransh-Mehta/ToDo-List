const btn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList")
const todoTask = document.querySelector("#todoText");
    if(todoTask.value == ''){
        console.log('Enter something')
        
    }

let adding =  ()=>{
    let newTodoItem = document.createElement('li');
    newTodoItem.classList.add("flex", "justify-center", "items-center", "m-4");

    let todoValue = document.createElement('span');
    todoValue.classList.add("font-medium",)
    todoValue.innerText = todoTask.value

    let dltBtn = document.createElement('button');
    dltBtn.classList.add("x-3", "py-2" ,"ml-6","text-xs", "font-medium", "text-red-500", "bg-white", "rounded-lg", "border", "border-red-500" , "hover:bg-red-100",  "hover:text-red-700")
    dltBtn.innerText = 'Delete'

    newTodoItem.appendChild(todoValue)
    newTodoItem.appendChild(dltBtn);
    todoList.append(newTodoItem)
    todoTask.value = ''
    saveData();
    dltBtn.addEventListener('click', ()=>{
        console.log("deleted")
        newTodoItem.removeChild(todoValue)
        newTodoItem.removeChild(dltBtn)
        saveData();
    
    })
    
}

let saveData = ()=>{
    localStorage.setItem('data', todoList.innerHTML)
}
// let deleteLs = ()=>{
//     localStorage.removeItem('data')
// }
let showTask = ()=>{
    todoList.innerHTML = localStorage.getItem('data')
}
// showTask();
showTask()
btn.addEventListener('click', adding)
saveData()
