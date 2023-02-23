import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
	return (
		<MeetupDetail
			image={props.meetupData.image}
			title={props.meetupData.title}
			address={props.meetupData.address}
			description={props.meetupData.description}
		/>
	);
}

export async function getStaticPaths() {
	dotenv.config();
	const client = await MongoClient.connect(process.env.MONGO_URI);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
	const data = meetups.map((meetup) => ({
		params: { meetupId: meetup._id.toString() },
	}));

	client.close();

	return {
		fallback: false,
		paths: data,
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	dotenv.config();
	const client = await MongoClient.connect(process.env.MONGO_URI);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');

	const selectedMeetup = await meetupsCollection.findOne({
		_id: new ObjectId(meetupId),
	});

	const selectedData = {
		id: selectedMeetup._id.toString(),
		title: selectedMeetup.data.title,
		address: selectedMeetup.data.address,
		image: selectedMeetup.data.image,
		description: selectedMeetup.data.description
	};

	client.close();

	return {
		props: {
			meetupData: selectedData,
		},
		revalidate: 10,
	};
}

export default MeetupDetails;
