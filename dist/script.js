let ctr = 2;
function deleteTodo(index) {
    const element = document.getElementById(index)
    element.parentNode.removeChild(element)
}

function addTodo() {
    const inputElement = document.querySelector("input")
    const value = inputElement.value;

    const newElement = document.createElement("div")
    newElement.setAttribute("id", ctr);
    ctr++;
    if (value !== '') {
        newElement.innerHTML =
        `<div id="${ctr}" class="px-20 mb-4 bg-[#080606] shadow-sm shadow-zinc-800  p-3 rounded-lg flex flex-wrap items-center justify-between">
                <div class="flex">
                    <input onclick="completedTask(${ctr})" id="myCheck${ctr}" class="p-2 " type="checkbox" name="x" id="a" placeholder=".">
                    <h4 class="text-[20px] font-semibold px-6">${ctr}. ${value}</h4>
                </div>
                <div class="flex">
                    <div class=" bg-black shadow-sm rounded-lg p-1 mr-2">
                        <button class="text-2xl" onclick="editTodo(${ctr})">🖊️</button>
                    </div>
                    <div class=" bg-black shadow-sm rounded-lg p-1">
                        <button class="text-2xl" onclick="deleteTodo(${ctr})">❌</button>
                    </div>
                </div>
            </div>`    
    } else {
        alert("invalid input")
    }
    
    document.querySelector('#todoList').appendChild(newElement)
    inputElement.value = ''
}

function editTodo(id) {
    const todoDiv = document.getElementById(id);
    const todoText = todoDiv.querySelector('h4').textContent.slice(3);
    
    const newTodoText = prompt('Edit your todo:', todoText);
    
    if (newTodoText !== null && newTodoText.trim() !== '') {
        todoDiv.querySelector('h4').innerHTML = `${id}. ${newTodoText}`;
    }
}

function completedTask(id) {
    const divBg = document.getElementById(id)
    const checkBox = document.querySelector("#myCheck"+id)
    if (checkBox.checked === true) {
        divBg.style.backgroundColor = "green"
    } else {
        divBg.style.backgroundColor = "#080606"
    }
}