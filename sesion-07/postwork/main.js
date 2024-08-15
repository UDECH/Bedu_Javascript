
var container = document.getElementById('app');


var title = createNode('h1', 'Todo App');

var addButton = createNode('button', 'Add', { type: 'button' });

var input = createNode('input', '', { type: 'text', placeholder: 'New task...' });



appendChildren(container, [title, input, addButton]);



var container = document.getElementById('app');
container.className = 'container';

var title = createNode('h1', 'Todo App', { className: 'title' });

var addButton = createNode('button', 'Add', { type: 'button', className: 'add-button' });

var input = createNode('input', '', { type: 'text', placeholder: 'New task...', className: 'todo-input' });
