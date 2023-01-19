import { useState, useRef } from 'react';

import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
	const enteredName = useRef();
	const enteredAge = useRef();

	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const currentName = enteredName.current.value;
		const currentAge = enteredAge.current.value;

		if (currentName.trim().length === 0 || currentAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please, enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+currentAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please, enter a valid age greater than zero.',
			});
			return;
		}

		props.onAddUser(currentName, currentAge);
		enteredName.current.value = '';
		enteredAge.current.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={enteredName} />
					<label htmlFor="age">Age (years)</label>
					<input id="age" type="number" ref={enteredAge} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
