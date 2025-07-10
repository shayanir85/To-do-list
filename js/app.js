const ToDoList = document.getElementById('toDo');
const btn_add = document.getElementById('add');
const job = document.getElementById('job');
const strike = document.getElementById('St');
const radio = document.getElementById('radio');
const edit = document.getElementById('edit');
const del = document.getElementById('delete');
let i = 0;
btn_add.addEventListener('click', () => {
    if (job.value != '') {
        ToDoList.innerHTML += `
        `;
        i++;

    } else {
        alert('you must write something.');
    }
});

radio.addEventListener('change', () => {
    strike.innerHTML = ``;
    strike.innerHTML = `
    <s>${job.value}</s>
    `;
});