import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
	const { events } = useLoaderData();

	return (
		<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
			<Await resolve={events}>{() => <EventsList events={loadEvents} />}</Await>
		</Suspense>
	);
};

export default EventsPage;

export async function loadEvents() {
	const response = await fetch('http://localhost:8080/events');
	if (!response.ok) {
		return json({ message: 'Could not fetch events.' }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.events;
	}
}
export function loader() {
	return defer({
		events: loadEvents(),
	});
}
