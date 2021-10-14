import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import TaskHeader from './TaskHeader';
import Tasks from './Tasks';
import AddTask from './AddTask';
// import Button from './Button';
// import Header from './Header';

const TaskManager = ({ title }) => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};

		getTasks();
	}, []);

	//Fetch Tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();
		return data;
	};

	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();
		return data;
	};

	const onAdd = () => {
		setShowAddTask(!showAddTask);
		const showAdd = { showAddTask };
	};

	//Add Task
	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();

		setTasks([...tasks, data]);

		// const id = Math.floor(Math.random() * 100000) + 1;
		// const newTask = { id, ...task };
		// setTasks([...tasks, newTask]);
	};

	//Delete Task
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE',
		});

		setTasks(tasks.filter((task) => task.id !== id));
	};

	//Toggle Reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updTask),
		});

		const data = await res.json();

		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			)
		);
	};

	return (
		<div className='taskManager'>
			<TaskHeader
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				'No Tasks To Show'
			)}
		</div>
	);
};

TaskManager.defaultProps = {
	title: 'Task Manager',
};

TaskManager.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TaskManager;
