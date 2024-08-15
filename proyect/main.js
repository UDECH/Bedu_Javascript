//Cuando la pagina se ha cargado
document.addEventListener('DOMContentLoaded', () => {
    //Selecciona el elemento de entrada de texto
    const taskInput = document.getElementById('taskInput');
    //Selecciona el botón (<button>) que el usuario presionará para agregar la nueva tarea a la lista.
    const addTaskBtn = document.getElementById('addTaskBtn');
    //Selecciona la lista (<ul>) donde se mostrarán las tareas agregadas.
    const taskList = document.getElementById('taskList');
    //Añade un evento click al botón "Agregar Tarea". Cada vez que el usuario haga clic en este botón, se ejecutará la función addTask
    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        //trim elimina espacios al inicio y final
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            //crea nuevo elemento de la lista
            const taskItem = document.createElement('li');
            //se agrega la clase para aplicar estilos
            taskItem.classList.add('todo-item');
            //contenido html span y button de eliminar
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteBtn">Eliminar</button>
            `;
            //agrega el elemento
            taskList.appendChild(taskItem);
            //limpia la entrada
            taskInput.value = '';
            //selecciona el elemento eliminar de la lista
            const deleteBtn = taskItem.querySelector('.deleteBtn');
            //elimina elemento de la lista con el evento
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });
        }
    }


});

