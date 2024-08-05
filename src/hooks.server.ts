import cookie from 'cookie';
import { uid } from 'uid';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';

const { VITE_DB_CONNNECTION_STRING, VITE_DB_USERNAME, VITE_DB_PASSWORD } = import.meta.env;

const mongoUri = VITE_DB_CONNNECTION_STRING.replace('<password>', VITE_DB_PASSWORD);

const mongooseConnect = async () => {
	try {
		await mongoose.connect(mongoUri);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
};

mongooseConnect();

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

const verifyJWT = (token: string): boolean => {
	const { VITE_JWT_SECRET } = import.meta.env;
	if (!VITE_JWT_SECRET) {
		return false;
	}
	try {
		jwt.verify(token, VITE_JWT_SECRET);
		return true;
	} catch (error) {
		console.error('Token verification failed:');
		return false;
	}
};

export const handle = async ({ event, resolve }) => {
	const request = event.request;
	const themeCookie = getCookie(request, 'theme') || 'dark';
	const clientId = getCookie(request, 'clientId');
	const token = getCookie(request, 'token');

	//canot get all the messages, cant delete all the messages, can't delete one message

	const isApiMessages = event.request.url.includes('/api/messages');
	const isGetOrDelete = ['GET', 'DELETE'].includes(event.request.method);
	const isDeleteWithId = event.params?.id && event.request.method === 'DELETE';
	const isRealm = event.request.url.includes('/realm') && !event.request.url.includes('redirect');

	// Your logic here

	let shouldRedirect = false;

	if ((isApiMessages && isGetOrDelete) || (isApiMessages && isDeleteWithId) || isRealm) {
		try {
			const isValidToken = verifyJWT(token);

			if (!isValidToken && event.request.url.includes('/realm')) {
				shouldRedirect = true;
			} else if (!isValidToken) {
				throw new Error('Unauthorized');
			}
		} catch (err) {
			return new Response(JSON.stringify({ status: 'fail', message: 'Unauthorized' }), {
				status: 401,
				headers: { 'Content-Type': 'application/json' }
			});
		}
	}
	const { url, headers } = event.request;
	const host = headers.get('host');

	if (shouldRedirect) {
		const redirectTo = host ? url.split(host)[1] : '/';
		console.log('redirecting to login', redirectTo);
		throw redirect(307, `/login?redirect=${redirectTo}`);
	}

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
