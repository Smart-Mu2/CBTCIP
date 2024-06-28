const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
	const taskText = taskInput.value;
    
	if (taskText) {
		const taskListItem = document.createElement('li');
		taskListItem.textContent = taskText;
		taskList.appendChild(taskListItem);
		taskInput.value = '';
	}
}

taskList.addEventListener('click', toggleTaskDone);

function toggleTaskDone(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('done');
	}
}