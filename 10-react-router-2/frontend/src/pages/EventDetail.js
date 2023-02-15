import { Suspense } from 'react';
import {
	useRouteLoaderData,
	json,
	redirect,
	defer,
	Await,
} from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetailPage = () => {
	const { event, events } = useRouteLoaderData('event-detail');
	return (
		<>
			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
				<Await resolve={event}>
					{(loadedEvent) => <EventItem event={loadedEvent} />}
				</Await>
			</Suspense>
			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
				<Await resolve={events}>
					{(loadedEvents) => <EventsList event={loadedEvents} />}
				</Await>
			</Suspense>
		</>
	);
};

export default EventDetailPage;

export async function loadEvent(id) {
	const response = await fetch('http://localhost:8080/events/' + id);

	if (!response.ok) {
		throw json(
			{ message: 'Could not fetch datails for selected event.' },
			{ status: 500 }
		);
	} else {
		const resData = await response.json();
		return resData.event;
	}
}

export async function loadEvents() {
	const response = await fetch('http://localhost:8080/events');
	if (!response.ok) {
		return json({ message: 'Could not fetch events.' }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.events;
	}
}

export async function loader({ request, params }) {
	return defer({
		event: await loadEvent(params.eventId),
		events: loadEvents(),
	});
}

export async function action({ request, params }) {
	const id = params.eventId;
	const response = await fetch('http://localhost:8080/events/' + id, {
		method: request.method,
	});

	if (!response.ok) {
		throw json({ message: 'Could not delete event.' }, { status: 500 });
	}

	return redirect('/events');
}
