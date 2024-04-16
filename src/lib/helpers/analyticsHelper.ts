import Cookies from 'js-cookie';

declare global {
	interface Window {
		dataLayer: any[];
	}
}

type Event = {
	event_name: 'page_view';
	client_id?: string;
};

export const sendGaEvent = (event: Event) => {
	const clientId = Cookies.get('clientId');
	event.client_id = clientId || '';
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(event);
	console.log('sending event to GA: ', event);
};
