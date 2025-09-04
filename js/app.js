addToObj()
addToDidObj()
function addTask() {
    if (task.value != '' && date.value != '' && title.value != '') {
        taskToDo.push(
            {
                tasks: task.value.trim(),
                dates: date.value,
                title: title.value.trim(),
            }
        );
        task.value = ''
        date.value = ''
        title.value = ''
        task.focus();
        addToObj()

    } else if (task.value == '' || date.value == '' || title.value == '') {
        setTimeout(() => {
            warning.style.transform = 'translateY(-100px)';
            warning.style.opacity = '1';

            setTimeout(() => {

                warning.style.transform = 'translateY(-850px)';
                warning.style.opacity = '0';
            }, 3000)
        }, 500)
    }
}


function addToObj() {
    if (stored_tasks) {
        Obj_task = JSON.parse(stored_tasks);
    } else {
        Obj_task = [];
    }
    Obj_task = Obj_task.concat(taskToDo);
    SaveToDoLocalstorage()
    taskToDo = [];
    generator();
    console.log('saved obj:');
    console.log(Obj_task);
    console.log(stored_tasks);

}
function SaveToDoLocalstorage() {
    localStorage.setItem('task', JSON.stringify(Obj_task));
}
function SaveToDidLocalstorage() {
    localStorage.setItem('taskDid', JSON.stringify(Obj_task_did));
}
function GetFromToDoLocalstorage() {
    localStorage.setItem('task', JSON.stringify(Obj_task));
}
function generator() {
    generate.innerHTML = ``;
    Obj_task.forEach((tasks, index) => {
        generate.innerHTML += `        
        <div class=" bg-white m-[10%] rounded-[20px] p-[10px]">
        <h1 class="m-2">
        ${tasks.title}
        </h1>
        <div class=" m-2">
        <h3>
        ${tasks.tasks}
        </h3> 
        <i class='mt-3'>
        Date: ${tasks.dates}
        </i>
        </div>
        <div class="flex">
        <button
        onclick="del(${index})"
            class="bg-transparent m-3 flex hover:bg-red-500 text-red-700 font-semibold pointer-corsur hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-[50px]">
            delete
            </button>
            <button
            onclick="edit(${index})"
            class="bg-transparent m-3 flex hover:bg-blue-500 text-blue-700 font-semibold pointer-corsur hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-[50px]">
            edit
            </button>
            <button 
            onclick="check(${index})"
            class="bg-transparent m-3 flex hover:bg-gray-500 text-gray-700 font-semibold pointer-corsur hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-[50px]">
            check
            </button>
            </div>
            </div>`;
    });
}
function generator_checked() {
    if(Obj_task_did == ''){
        G_check_list.innerHTML = `            <p class="text-center text-white mt-3">
                nothing is checked
            </p>`;
    }else{
        G_check_list.innerHTML = ``;
        Obj_task_did.forEach((tasks, index) => {
            G_check_list.innerHTML += `        
            <div class="bg-white m-[10%] rounded-[20px] p-[10px]">
            <h1 class="m-2">
            ${tasks.title}
            </h1>
            <div class=" m-2">
            <h3>
            ${tasks.tasks}
            </h3> 
            <i class='mt-3'>
            Date: ${tasks.dates}
            </i>
            </div>
            <div class="flex">
            <button
            onclick="del_checked(${index})"
                class="bg-transparent m-3 flex hover:bg-red-500 text-red-700 font-semibold pointer-corsur hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-[50px]">
                delete
                </button>
                <button 
                onclick="uncheck(${index})"
                class="bg-transparent m-3 flex hover:bg-gray-500 text-gray-700 font-semibold pointer-corsur hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-[50px]">
                uncheck
                </button>
                </div>
                </div>`;
        });
    }
}
function check(index) {
    taskDid.push(
        {
            tasks: Obj_task[index].tasks,
            dates: Obj_task[index].dates,
            title: Obj_task[index].title,
        });
    addToDidObj()
    del(index)
}
function addToDidObj() {
    if (stored_Did_tasks) {
        Obj_task_did = JSON.parse(stored_Did_tasks);
    } else {
        Obj_task_did = [];
    }
    Obj_task_did = Obj_task_did.concat(taskDid);
    SaveToDidLocalstorage()
    taskDid = [];
    generator_checked();
    console.log('saved did obj:');
    console.log(Obj_task_did);
    console.log(stored_tasks);

}

function edit(index) {
    update_inputs.innerHTML = `        <div class="p-5">
    <div class="join rounded-[50px] overflow-hidden border-[2px] border-blue-600 w-auto flex">
    <input id="task" value="${Obj_task[index].tasks}" type="text" placeholder="your task"
    class="   rounded-l-[50px] text-gray p-2 form-control w-[25%] bg-cyan-100">
    <input value="${Obj_task[index].title}" id="title" type="text" placeholder="title"
    class="   text-gray p-2 form-control w-[25%] bg-cyan-100">
    <input id="date" type="date" value="${Obj_task[index].dates}" class=" p-2 form-control  rounded-r-[50px] w-[50%] text-gray bg-cyan-100">
    </div>
    <div>
    <button onclick="update(${index})"
    class="bg-transparent mt-5 flex hover:bg-green-500 text-green-700 font-semibold pointer-corsur hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-[50px]">
    update
    </button>
    </div>
    </div>`;

}
function update(index) {
    const task = document.getElementById('task');
    const date = document.getElementById('date');
    const title = document.getElementById('title');
    if (task.value != '' && date.value != '' && title.value != '') {
        Obj_task[index].title = title.value;
        Obj_task[index].dates = date.value;
        Obj_task[index].tasks = task.value;
        SaveToDoLocalstorage();
        generator();
        update_inputs.innerHTML = `
        <div class="p-5">
        <div class="join rounded-[50px] overflow-hidden border-[2px] border-blue-600 w-auto flex">
        <input id="task" type="text" placeholder="your task"
        class="   rounded-l-[50px] text-gray p-2 form-control w-[25%] bg-cyan-100">
        <input id="title" type="text" placeholder="title"
        class="   text-gray p-2 form-control w-[25%] bg-cyan-100">
        <input id="date" type="date" class=" p-2 form-control  rounded-r-[50px] w-[50%] text-gray bg-cyan-100">
        </div>
        <div>
        <button onclick="addTask()"
        class="bg-transparent mt-5 flex hover:bg-green-500 text-green-700 font-semibold pointer-corsur hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-[50px]">
        add
                </button>
            </div>
            </div>
            `;
        title.value = '';
        date.value = '';
        task.value = '';
    } else if (task.value == '' || date.value == '' || title.value == '') {
        setTimeout(() => {
            warning.style.transform = 'translateY(-100px)';
            warning.style.opacity = '1';

            setTimeout(() => {

                warning.style.transform = 'translateY(-850px)';
                warning.style.opacity = '0';
            }, 3000)
        }, 500)
    }
}
function del(index) {
    Obj_task.splice(index, 1)
    SaveToDoLocalstorage()
    generator()
}
function del_checked(index) {
    Obj_task_did.splice(index, 1)
    SaveToDidLocalstorage()
    generator_checked()
}
function uncheck(index){
    console.log(index)
    taskToDo.push(
     {
        tasks: Obj_task_did[index].tasks,
        dates: Obj_task_did[index].dates,
        title: Obj_task_did[index].title
     }   
    );  
    del_checked(index);
    addToObj();
    generator();
    generator_checked();
}