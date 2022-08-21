const taskToDo = document.querySelector('.to-do'), taskDo = document.querySelector('.do'), titleInput = document.querySelector('#title'); 
const taskInput = document.querySelector('#task'), sendTaskBtn = document.querySelector('#send');
let titleValue = '', taskValue = '';

document.addEventListener('click', e => {
    if (e.target == sendTaskBtn) {
        e.preventDefault();
        let test = document.createElement('div');
        titleValue = titleInput.value;
        taskValue = taskInput.value;
        taskToDo.append(test)
        test.innerHTML = `<h4>Title: ${titleValue}</h4><p>Task : ${taskValue}</p><button class="update-btn">Fais</button><button class="delete-btn">Delete</button>`;
    }
    else if (e.target.className == ('update-btn')) {
        e.target.parentNode.remove()
        taskDo.append(e.target.parentNode)
        e.target.parentNode.classList.add('checked')
    }else if (e.target.className == ('delete-btn')) {
        e.target.parentNode.remove()
    }       
})