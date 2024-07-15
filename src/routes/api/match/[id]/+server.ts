const {
	VITE_FOOTBALL_RAPID_API_HOST,
	VITE_FOOTBALL_RAPID_API_MATCH_URL,
	VITE_FOOTBALL_RAPID_API_KEY
} = import.meta.env;

export const GET = async (req: Request, res: Response) => {
	const apiUrl = `${VITE_FOOTBALL_RAPID_API_MATCH_URL}?id=${req.params.id}`;

	try {
		const response = await fetch(apiUrl, {
			headers: {
				'x-rapidapi-host': VITE_FOOTBALL_RAPID_API_HOST,
				'x-rapidapi-key': VITE_FOOTBALL_RAPID_API_KEY
			}
		});

		const data = await response.json();
		console.log('insdie server id', data);
		if (data && data?.length > 0) {
			return new Response(JSON.stringify({ data }), {
				status: response.status
			});
		} else {
			throw new Error('No data found');
		}
	} catch (e) {
		return new Response(JSON.stringify({ message: 'something went wrong' }), {
			status: 500
		});
	}
};
