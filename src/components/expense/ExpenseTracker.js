import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

import { GlobalProvider } from '../../context/GlobalState';

const ExpenseTracker = () => {
	return (
		<div className='expense-tracker'>
			<GlobalProvider>
				<Header />
				<div className='container'>
					<Balance />
					<IncomeExpenses />
					<TransactionList />
					<AddTransaction />
				</div>
			</GlobalProvider>
		</div>
	);
};

export default ExpenseTracker;
