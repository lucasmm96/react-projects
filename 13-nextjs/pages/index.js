import Head from 'next/head';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly active React meetups"
				/>
			</Head>
			<MeetupList meetups={props.meetups}></MeetupList>;
		</>
	);
}

// get data according to frequency defined (in seconds) on 'revalidate' field.
export async function getStaticProps() {
	dotenv.config();
	const client = await MongoClient.connect(process.env.MONGO_URI);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();
	const data = meetups.map((meetup) => ({
		title: meetup.data.title,
		address: meetup.data.address,
		image: meetup.data.image,
		id: meetup._id.toString(),
	}));

	client.close();

	return {
		props: {
			meetups: data,
		},
		revalidate: 10,
	};
}

export default HomePage;
