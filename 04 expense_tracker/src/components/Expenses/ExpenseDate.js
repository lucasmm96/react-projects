import './ExpenseDate.css';

const ExpenseDate = (props) => {
	const date = props.date.toISOString().split('T')[0];
	const year = date.split('-')[0];
	const month = props.date.toLocaleString('en-US', { month: 'long' });
	const day = date.split('-')[2];

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
};

export default ExpenseDate;
