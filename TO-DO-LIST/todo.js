const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskFinishList = document.getElementById('task-finish-list');

function addTask() {
	const taskText = taskInput.value.trim();
    
	if (taskText === '') {
		alert("You must write something");
	}
	else {
		const taskContent = '<div class="mu2-content">'+ taskText + '</div>';
		const li = document.createElement('li');
		li.innerHTML = taskContent;
		taskList.appendChild(li);
		taskInput.value = '';

		const date = new Date();
		const dateFormat = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
		const dateElement = document.createElement('span');
		dateElement.classList.add('date1');
		dateElement.textContent = dateFormat;
		li.appendChild(dateElement);

		const deleteBtn = document.createElement('button');
		deleteBtn.classList.add('delete-btn');
		deleteBtn.textContent = 'Delete';
		li.appendChild(deleteBtn);
		
		const completeBtn = document.createElement('button');
		completeBtn.classList.add('complete-btn');
		completeBtn.textContent = 'Complete';
		li.appendChild(completeBtn);
		savaData();
	}
}

taskList.addEventListener('click', toggleTask);

function toggleTask(event) {
	if (event.target.classList.contains('delete-btn')) {
		const task = event.target.parentNode;
		task.remove();
		savaData();
	} else if (event.target.classList.contains('complete-btn')) {
		const task = event.target.parentNode;
		taskFinishList.appendChild(task);
		task.removeChild(event.target);

		const date = new Date();
		const dateFormat =`${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
		const dateElement = document.createElement('span');
		dateElement.classList.add('date');
		dateElement.textContent = dateFormat;
		task.appendChild(dateElement);

		const deleteBtn1 = document.createElement('button');
		deleteBtn1.classList.add('delete-btn1');
		deleteBtn1.textContent = 'Delete';
		task.appendChild(deleteBtn1);
		savaData();
	}
}

taskFinishList.addEventListener('click', toggleTask1);

function toggleTask1(event) {
	if (event.target.classList.contains('delete-btn1')) {
		const tasks = event.target.parentNode;
		tasks.remove();
		savaData();
	}
}

function savaData() {
	localStorage.setItem("data", taskList.innerHTML);
	localStorage.setItem("data1", taskFinishList.innerHTML);
}

function showTask() {
	taskList.innerHTML = localStorage.getItem("data");
	taskFinishList.innerHTML = localStorage.getItem("data1");
}
showTask();