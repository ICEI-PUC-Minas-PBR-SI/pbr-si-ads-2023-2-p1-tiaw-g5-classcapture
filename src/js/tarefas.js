const inputTask = document.querySelector('#input-task');
const btNewTask = document.querySelector('#bt-new-task');
const btOk = document.querySelector('#btn-ok')
const toDoList = document.querySelector('#to-do-list');
const localStorageChave = 'to-do-list-classcaputre';

btNewTask.addEventListener('click', () =>{
    newTask();
});

function newTask () {
    inputTask.style.border = ''
    if(!inputTask.value) {
        alert("Digite uma tarefa para inserir em sua lista");
        inputTask.style.border = '2px solid red'
    } else {
        let values = JSON.parse(localStorage.getItem(localStorageChave) || '[]');;

        values.push({
            tarefa: inputTask.value,
        });

        localStorage.setItem(localStorageChave,JSON.stringify(values));
        inputTask.value = "";
        mostraTarefa ();
    }
}

function mostraTarefa () {
    let values = JSON.parse(localStorage.getItem(localStorageChave) || '[]');
    toDoList.innerHTML = '';
    for(let i = 0; i < values.length; i++) {
        toDoList.innerHTML += `<li>${values[i].tarefa}<button id="btn-ok" onclick='removeItem("${values[i].tarefa}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg></button></li>`;
    }
}

function removeItem(dado) {
    let values = JSON.parse(localStorage.getItem(localStorageChave) || '[]');
    let index = values.findIndex(x => x.tarefa == dado)
    values.splice(index,1)
    localStorage.setItem(localStorageChave,JSON.stringify(values));
    mostraTarefa();
}

mostraTarefa ();