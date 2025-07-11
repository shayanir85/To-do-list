// File: js/app.js
const date = document.getElementById('date');//gets a date from input
const add = document.getElementById('add');//add button
const job = document.getElementById('job');
const toDo = document.getElementById('toDo'); //Todo section
const del = document.querySelector('.delete');
const edit = document.querySelector('.edit');
const completed = document.querySelector('.complete');
tasks = [];
task = {
    Date: '',
    complete: false,
    title: '',
};
function showtasks(listTask) {
    toDo.innerHTML = listTask;
}
function generate_listTask() {
    let list = '';
    tasks.forEach((val , index) => {
            list += `<div class="clearfix m-3 border rounded p-2">
                    <div class="f-right">
                        <button id='' class="complete btn btn-sm btn-outline-success">
                            <i class="bi bi-check-all"></i>
                        </button>
                        <i>${ index+1 +'&nbsp;'+ val.title}</i>&nbsp;<i>${val.Date}</i>
                    </div>
                    <div class="f-left">
                        <button id='' class="edit btn btn-sm btn-outline-info">
                            <i class="bi bi-pen"></i>
                        </button>
                        <button id='' class="delete btn btn-sm btn-outline-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                    </div>`;
    });
return list;
}
function addTask() {
    if(date.value === '' && job.value === ''){
        alert('Please fill the date and task fields');
    }else if (date.value === '') {
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
        date.value = '';
        job.value = '';
        job.focus();
        showtasks(generate_listTask());
    }
}
