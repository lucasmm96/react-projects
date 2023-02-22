import NewMeetup from '../../components/meetups/NewMeetupForm';

function newMeetupPage() {
	function addMeetupHandler(enteredMeetuoData) {
		console.log(enteredMeetuoData);
	}

	return <NewMeetup onAddMeetup={addMeetupHandler} />;
}

export default newMeetupPage;
