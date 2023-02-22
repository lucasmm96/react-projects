import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
	return (
		<MeetupDetail
			image="https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/meetup-talk.jpg"
			title="First Meetup"
			address="Some street 5, Some city 1234"
			description="The meetup description"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	return {
		props: {
			meetupProp: {
				id: meetupId,
				image:
					'https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/meetup-talk.jpg',
				title: 'First Meetup',
				address: 'Some street 5, Some city 1234',
				description: 'The meetup description',
			},
		},
		revalidate: 10,
	};
}

export default MeetupDetails;
