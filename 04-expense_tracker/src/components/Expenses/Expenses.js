import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = (selectedFilteredYear) => {
		setFilteredYear(selectedFilteredYear);
	};
	const filteredItems = props.items.filter(
		(item) => item.date.getFullYear().toString() === filteredYear
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilterData={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredItems}/>
				<ExpensesList items={filteredItems} />
			</Card>
		</div>
	);
};

export default Expenses;
