import { useRouter } from 'next/router';
import Head from 'next/head';
import NewMeetup from '../../components/meetups/NewMeetupForm';

function newMeetupPage() {
	const router = useRouter();

	async function addMeetupHandler(enteredMeetupData) {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: { 'Content-Type': 'application/json' },
		});

		const data = await response.json();
		console.log(data);

		router.replace('/');
	}

	return (
		<>
			<Head>
				<title>New Meetups</title>
				<meta name="description" content="Add a new meetup" />
			</Head>
			<NewMeetup onAddMeetup={addMeetupHandler} />;
		</>
	);
}

export default newMeetupPage;
