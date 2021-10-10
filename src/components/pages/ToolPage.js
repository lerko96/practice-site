import TaskManager from '../tools/toDoList/TaskManager';
import ExpenseTracker from '../tools/expense/ExpenseTracker';

export default function ToolPage() {
	return (
		<div>
			<h1>Tools</h1>
			<div className='tool-list'>
				<TaskManager />
				<ExpenseTracker />
			</div>
		</div>
	);
}
