import { useState } from 'react';

import Wrapper from './Helpers/Wrapper';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: userName, age: userAge, id: Math.random().toString() },
			];
		});
	};
	return (
		<Wrapper>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList}></UsersList>
		</Wrapper>
	);
}

export default App;
