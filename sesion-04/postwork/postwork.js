

var isCompleted = false;

function toggleTaskCompleted() {
    isCompleted = !isCompleted;
}



var tasks = [
    {
        description: 'Some task to do',
        isCompleted: false
    },
    {
        description: 'Another task to do',
        isCompleted: false
    },
    {
        description: 'One more task to do',
        isCompleted: false
    }
]



function toggleTaskCompleted(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
}



toggleTaskCompleted(0);

toggleTaskCompleted(2);

console.log(tasks);

/*
[
  {
    description: 'Some task to do',
    isCompleted: true
  },
  {
    description: 'Another task to do',
    isCompleted: false
  },
  {
    description: 'One more task to do',
    isCompleted: true
  }
]
*/




function deleteTask(index) {
    tasks.splice(index, 1);
}




deleteTask(1);

console.log(tasks);

/*
[
  {
    description: 'Some task to do',
    isCompleted: true
  },
  {
    description: 'One more task to do',
    isCompleted: true
  }
]
*/

