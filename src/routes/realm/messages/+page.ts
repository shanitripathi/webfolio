import type { Message } from '$lib/types/messageType';

export const load = async (input) => {
	let messages: Message[] = [];
	try {
		const response = await input.fetch('/api/messages');
		const result = await response.json();
		if (result?.data) {
			messages = result.data;
		}
	} catch (e) {
		console.log(e);
	}

	return {
		messages
	};
};
