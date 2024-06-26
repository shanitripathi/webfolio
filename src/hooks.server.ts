import cookie from 'cookie';
import { uid } from 'uid';

const setCookie = (response: Response, name: string, value: string) => {
	response.headers.append(
		'Set-Cookie',
		cookie.serialize(name, value, {
			httpOnly: false,
			maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
			path: '/',
			sameSite: true,
			secure: true
		})
	);
};

const getCookie = (request: Request, name: string) => {
	const cookies = cookie.parse(request.headers.get('cookie') || '');
	return cookies[name];
};

export const handle = async ({ event, resolve }) => {
	const request = event.request;
	const themeCookie = getCookie(request, 'theme') || 'dark';
	const clientId = getCookie(request, 'clientId');
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${themeCookie}"`)
	});

	if (!themeCookie) {
		setCookie(response, 'theme', 'dark');
	}

	if (!clientId) {
		setCookie(response, 'clientId', uid());
	}

	return response;
};
