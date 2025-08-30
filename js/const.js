const task = document.getElementById('task');
const date = document.getElementById('date');
const title = document.getElementById('title');
const stored_tasks = localStorage.getItem('task');
let taskToDo = [];
let Obj_task = {};