import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_MEETUP = [
// 	{
// 		id: 'm1',
// 		title: 'A first Meetup',
// 		image:
// 			'https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/meetup-talk.jpg',
// 		address: 'Some address 1, 12345, Some City',
// 	},
// 	{
// 		id: 'm2',
// 		title: 'A second Meetup',
// 		image:
// 			'https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/meetup-talk.jpg',
// 		address: 'Some address 2, 12345, Some City',
// 	},
// 	{
// 		id: 'm3',
// 		title: 'A third Meetup',
// 		image:
// 			'https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/meetup-talk.jpg',
// 		address: 'Some address 3, 12345, Some City',
// 	},
// ];

function HomePage(props) {
	return <MeetupList meetups={props.meetups}></MeetupList>;
}

// get data for each new request
// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUP
// 		}
// 	};
// }

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
