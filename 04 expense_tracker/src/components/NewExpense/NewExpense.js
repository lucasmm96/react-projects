import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		props.onAddExpense(expenseData);
		disableFormEditingStatus();
	};

	const [formEditingStatus, setFormEditingStatus] = useState(false);

	const enableFormEditingStatus = () => {
		setFormEditingStatus(true);
	};

	const disableFormEditingStatus = () => {
		setFormEditingStatus(false);
	};

	return (
		<div className="new-expense">
			{formEditingStatus && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={disableFormEditingStatus}
				/>
			)}
			{!formEditingStatus && (
				<button onClick={enableFormEditingStatus}>Add New Expenses</button>
			)}
		</div>
	);
};

export default NewExpense;
