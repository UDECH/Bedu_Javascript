$(document).ready(function() {
  // Selección de elementos del DOM y creación de un contador de tareas
  const $taskInput = $('#taskInput'); // Selecciona el input donde se escriben las nuevas tareas.
  const $taskList = $('#taskList'); // Selecciona la lista (ul) donde se añadirán las tareas.
  const $addTaskBtn = $('#addTaskBtn'); // Selecciona el botón que se utiliza para agregar nuevas tareas.
  const $taskCounter = $('<div class="task-counter"></div>').insertAfter($taskList); 
  // Crea un nuevo elemento div con la clase "task-counter" y lo inserta en el DOM justo después de la lista de tareas ($taskList).
  
  // Inicializar contador de tareas
  updateTaskCounter(); // Llama a la función updateTaskCounter para actualizar el contador de tareas al cargar la página.

  // Evento para agregar tarea
  $addTaskBtn.on('click', function() {
      addTask(); // Añade un evento 'click' al botón de agregar tarea, de manera que cuando se haga clic, se llame a la función addTask().
  });

  // Añade un evento para agregar tarea cuando se presiona la tecla "Enter"
  $taskInput.on('keypress', function(e) {
      if (e.which === 13) { // Verifica si la tecla presionada es "Enter" (código 13).
          addTask(); // Si es así, llama a la función addTask().
      }
  });

  // Función para agregar una nueva tarea a la lista
  function addTask() {
      const taskText = $taskInput.val().trim(); // Obtiene el texto ingresado en el input y elimina los espacios en blanco al inicio y al final.
      if (taskText !== '') { // Verifica que el texto no esté vacío.
          const $taskItem = $('<li class="todo-item"></li>').html(`
              <span>${taskText}</span>
              <button class="deleteBtn">Eliminar</button>
          `);
          // Crea un nuevo elemento <li> con la clase "todo-item". El contenido HTML del elemento incluye un <span> con el texto de la tarea y un botón "Eliminar".

          // Evento para marcar tarea como completada
          $taskItem.on('click', function() {
              $(this).toggleClass('completed'); // Alterna la clase "completed" en el <li> cuando se hace clic en la tarea. Esto se utiliza para marcarla como completada o desmarcarla.
              updateTaskCounter(); // Actualiza el contador de tareas después de marcar la tarea.
          });

          // Evento para eliminar tarea
          $taskItem.find('.deleteBtn').on('click', function() {
              $taskItem.remove(); // Elimina el <li> correspondiente cuando se hace clic en el botón "Eliminar".
              updateTaskCounter(); // Actualiza el contador de tareas después de eliminar la tarea.
          });

          $taskList.append($taskItem); // Añade el nuevo <li> al final de la lista de tareas.
          $taskInput.val('').focus(); // Limpia el campo de entrada y coloca el cursor en él para facilitar la entrada de la siguiente tarea.
          updateTaskCounter(); // Actualiza el contador de tareas después de añadir la nueva tarea.
      }
  }

  // Función para actualizar el contador de tareas
  function updateTaskCounter() {
      const totalTasks = $taskList.find('li').length; // Cuenta el número total de tareas en la lista.
      const completedTasks = $taskList.find('li.completed').length; // Cuenta cuántas tareas tienen la clase "completed" (es decir, cuántas están completadas).
      const pendingTasks = totalTasks - completedTasks; // Calcula cuántas tareas están pendientes (no completadas).

      $taskCounter.text(`Tareas pendientes: ${pendingTasks} | Tareas completadas: ${completedTasks}`); 
      // Actualiza el texto del contador de tareas para mostrar cuántas están pendientes y cuántas están completadas.
  }
});
