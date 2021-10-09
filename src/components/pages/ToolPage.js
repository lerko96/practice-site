import { Switch, Route, Link } from 'react-router-dom';

import TaskManager from '../tools/toDoList/TaskManager';
import ExpenseTracker from '../tools/expense/ExpenseTracker';

function ToolPage() {
	return (
		<div>
			<h1>Tools</h1>

			<Switch>
				<Route exact path='/tools/to-do-list' component={TaskManager} />
				<Route
					exact
					path='/tools/expense-tracker'
					component={ExpenseTracker}
				/>
			</Switch>
			{/* <TaskManager />
			<ExpenseTracker /> */}
		</div>
	);
}

export default ToolPage;
