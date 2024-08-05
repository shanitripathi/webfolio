export const load = async (input) => {
	const redirectTo = input.url.searchParams.get('redirect') || '/';

	return {
		redirectTo
	};
};
