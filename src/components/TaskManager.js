import PropTypes from 'prop-types';
import { useState } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
// import Button from './Button';
// import Header from './Header';
import TaskHeader from './TaskHeader';

const TaskManager = ({ title }) => {
	const [showAddTask, setShowAddTask] = useState(false);

	const onAdd = () => {
		setShowAddTask(!showAddTask);
		const showAdd = { showAddTask };
	};

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'Feb 5th at 2:30',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at School',
			day: 'Feb 6th at 1:30',
			reminder: true,
		},
		{
			id: 3,
			text: 'Food Shopping',
			day: 'Feb 5th at 2:30',
			reminder: false,
		},
	]);

	//Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 100000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	//Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
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
