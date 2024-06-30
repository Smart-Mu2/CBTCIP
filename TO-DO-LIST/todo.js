const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskFinishList = document.getElementById('task-finish-list');

function addTask() {
	const taskText = taskInput.value.trim();
    
	if (taskText === '') {
		alert("You must write something");
	}
	else {
		const btn1 = '<div><button onclick="finishItem(event)"><i class="fa-solid fa-check"></i></button><button onclick="deleteItem(event)"><i class="fa-solid fa-trash"></i></button></div>';
		const taskContent = '<div class="mu2-content">'+ taskText + '</div>';
		const li = document.createElement('li');
		li.innerHTML = taskContent + btn1;
		taskList.appendChild(li);
		taskInput.value = '';
	}
}

function deleteItem(event) {
	event.target.parentElement.parentElement.parentElement.remove();
}

function finishItem(event) {
	if(event.target.tagName === "BUTTON") {
		const taskFinish = event.target.parentNode;
		taskFinishList.appendChild(taskFinish);
	}
}