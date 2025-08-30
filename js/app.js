const task = document.getElementById('task');
const date = document.getElementById('date');
const title = document.getElementById('title');
const stored_tasks = localStorage.getItem('task');
let taskToDo = [];
let Obj_task = {};
console.log(Obj_task);

console.log(stored_tasks);
function addTask() {
    if (task.value != '' && date.value != '' && title.value != '') {
        taskToDo.push(
            {
                tasks: task.value,
                dates: date.value,
                title: title.value,
            }
        );
        task.value = ''
        date.value = ''
        title.value = ''
        task.focus();
        addToObj()
    } else if (task.value == '' || date.value == '' || title.value == '') {
        setTimeout(() => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "please fill all inputs",
                showConfirmButton: true,
                timer: 1500
            });
        }, 1500);
    }
}


function addToObj() {
    if (stored_tasks) {
        Obj_task = JSON.parse(stored_tasks);
    } else {
        Obj_task = [];
    }
    Obj_task = Obj_task.concat(taskToDo);
    localStorage.setItem('task', JSON.stringify(Obj_task));
    taskToDo = [];

}