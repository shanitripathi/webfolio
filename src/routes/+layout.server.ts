import type { LayoutServerLoad } from './$types';
import cookie from 'cookie';

export const load: LayoutServerLoad = async (input) => {
	const cookies = cookie.parse(input.request.headers.get('cookie') || '');
	const themeCookie = cookies['theme'] || 'dark';

	return {
		theme: themeCookie
	};
};
