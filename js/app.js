// File: js/app.js
const date = document.getElementById('date');//gets a date from input
const add = document.getElementById('add');//add button
const btn_upd = document.getElementById('update');//add button
const job = document.getElementById('job');
const toDo = document.getElementById('toDo'); //Todo section
const upd = document.getElementById('update'); //upd stands for update upd => update
const completed = document.getElementById('completed'); 
let CurrentIndex;
tasks = JSON.parse(localStorage.getItem("tasks"));
task = {
    Date: '',
    complete: false,
    title: '',
};
showtasks(generate_listTask())
function showtasks(listTask) {
    toDo.innerHTML = listTask;
}
function reset_input() {
    date.value = '';
    job.value = '';
}
function update() {
    tasks[CurrentIndex].title = job.value ;
    tasks[CurrentIndex].Date = date.value  ;
    reset_input();
    add.style.display = 'block';
    upd.style.display = 'none';
    showtasks(generate_listTask());
}
function edit(i) {
    CurrentIndex = i;
    add.style.display = 'none';
    upd.style.display = 'block';
    job.value = tasks[i].title;
    date.value = tasks[i].Date;
}
function remove(i) {
    tasks.splice(i, 1);
    showtasks(generate_listTask());
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function generate_listTask() {
    let list = '';
    tasks.forEach((val, index) => {
        if(!tasks.complete){
                    list += `<div class="clearfix m-3 border rounded p-2">
                    <div class="f-right">
                        <button id='' class="complete btn btn-sm btn-outline-success">
                            <i class="bi bi-check-all"></i>
                        </button>
                        <i>${val.title}</i>&nbsp;<i>${val.Date}</i>
                    </div>
                    <div class="f-left">
                        <button onclick='edit(${index})' type="button"   class="edit btn btn-sm btn-outline-info" data-toggle="modal" data-target="#exampleModal">
                            <i id='update' class="bi bi-pen"></i>
                        </button>
                        <button onclick='remove(${index})' id='' class="delete btn btn-sm btn-outline-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                    </div>`;
        }else{

        }
    });
    return list;
}
function addTask() {
    if (date.value === '' && job.value === '') {
        alert('Please fill the date and task fields');
    } else if (date.value === '') {
        alert('Please fill the date field');
        return;
    } else if (job.value === '') {
        alert('Please fill the task field');
        return;
    } else {
        const newtask = {
            Date: date.value,
            complete: false,
            title: job.value,
        };
        tasks.push(newtask);
        console.log(tasks);
        reset_input();
        job.focus();
        showtasks(generate_listTask());
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}
document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addTask();
    }
}); 
