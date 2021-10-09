import TaskManager from './toDoList/TaskManager';
import ExpenseTracker from './expense/ExpenseTracker';

const Tools = () => {
    // const [tools, setTools] = useState([
	// 	{ title: 'To Do List', body: 'lorem ipsum...', date: '09/21', id: 1 },
	// 	{
	// 		title: 'Expense Tracker',
	// 		body: 'lorem ipsum...',
	// 		date: '09/21',
	// 		id: 2,
	// 	},
	// ]);


    return (
        <div>
            <TaskManager />
            <ExpenseTracker />
        </div>
    )
}

export default Tools
