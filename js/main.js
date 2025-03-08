//person types in text
//presses submits
//task populates on the bottom
//checkbox to show it's done
//button to delete task when ready

const submitBtn = document.querySelector('#submit');
// const enterTask = document.querySelector('#enterTask').value;
const warning = document.querySelector('#warning');
const clearAllBtn = document.querySelector('#clearAll');
const deleteBtn = document.querySelector('#delete');

clearAllBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', remove);
submitBtn.addEventListener('click', submit);

function clearAll(e){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const enterTask = document.querySelector('#enterTask').value;

    e.preventDefault();

    ul.remove(li);
}

function remove(e){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const enterTask = document.querySelector('#enterTask').value;

    e.preventDefault();

    ul.lastElementChild.remove();
}

function submit(e) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const enterTask = document.querySelector('#enterTask').value;

    e.preventDefault();

    if (enterTask !== "") {
        li.textContent += enterTask;
        ul.appendChild(li);
        warning.textContent = "";
    } else {
        warning.textContent = "Please enter a task";
    }
    
}


