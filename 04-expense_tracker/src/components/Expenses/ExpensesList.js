import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
	if (props.items.length > 0) {
		return props.items.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return <p className="expenses-list__fallback">No expenses found</p>;
};

export default ExpensesList;
