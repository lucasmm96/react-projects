import { Link } from 'react-router-dom';

const EventsPage = () => {
	const DUMMY_EVENTS = [
		{
			id: 'e1',
			title: 'some event 1',
		},
		{
			id: 'e2',
			title: 'some event 2',
		},
		{
			id: 'e3',
			title: 'some event 3',
		},
	];

	return (
		<>
			<h1>EventsPage</h1>
			<ul>
				{DUMMY_EVENTS.map((event) => (
					<li key={event.id}>
						<Link to={event.id}>{event.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default EventsPage;
