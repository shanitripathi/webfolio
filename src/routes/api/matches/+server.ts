import type { Match } from '$lib/types/rapidApiTypes';

const { VITE_FOOTBALL_RAPID_API_HOST, VITE_FOOTBALL_RAPID_API_URL, VITE_FOOTBALL_RAPID_API_KEY } =
	import.meta.env;

const apiUrl = VITE_FOOTBALL_RAPID_API_URL;

export async function GET(req: Request, res: Response) {
	try {
		const response = await fetch(apiUrl, {
			headers: {
				'x-rapidapi-host': VITE_FOOTBALL_RAPID_API_HOST,
				'x-rapidapi-key': VITE_FOOTBALL_RAPID_API_KEY
			}
		});
		const data = (await response.json()) as Match[] | undefined;

		if (data && data?.length > 0) {
			// only return live matches
			const liveMatches = data.filter((match) => match.status.includes('Live'));
			return new Response(JSON.stringify({ data: liveMatches }), { status: response.status });
		} else {
			throw new Error('No data found');
		}
	} catch (e) {
		return new Response(JSON.stringify({ message: 'something went wrong' }), {
			status: 500
		});
	}
}
