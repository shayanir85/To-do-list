// File: js/app.js
const date = document.getElementById('date');//gets a date from input
const add = document.getElementById('add');//add button
const job = document.getElementById('job');
const toDo = document.getElementById('toDo'); //Todo section
const del = document.getElementById('delete');
const edit = document.getElementById('edit');
const completed = document.getElementById('complete');
tasks = [];
task = {
    Date: '',
    complete: false,
    title: '',
};

function addTask() {
    const newtask = task ;
    newtask.Date = date.value;
    newtask.title = job.value;
    date.value = '';
    job.value = '';
    tasks.push(newtask);
}