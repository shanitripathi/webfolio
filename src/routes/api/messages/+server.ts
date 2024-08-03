import Message from '$db/messageModel';
import errors from '$utils/apiErrors';

export const GET = async () => {
	try {
		const messages = await Message.find().sort({ createdAt: -1 });
		return new Response(JSON.stringify({ status: 'success', data: messages }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		const { statusCode, status, message } = errors.server;
		return new Response(JSON.stringify({ status, message }), {
			status: statusCode,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};

// create a message
export const POST = async ({ request }) => {
	try {
		const body = await request.json();
		const message = await Message.create(body);
		return new Response(JSON.stringify({ status: 'success', message: body }), {
			status: 201,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: any) {
		let errMessage = 'Something went wrong';
		let status = 500;
		if (err?.name === 'ValidationError') {
			errMessage = err.errors.message.message;
			status = 400;
		}
		return new Response(
			JSON.stringify({
				status: 'fail',
				message: errMessage
			}),
			{ status, headers: { 'Content-Type': 'application/json' } }
		);
	}
};

export const DELETE = async () => {
	try {
		await Message.deleteMany({});
		return new Response(null, {
			status: 204
		});
	} catch (err) {
		const { statusCode, status, message } = errors.server;
		return new Response(JSON.stringify({ status, message }), {
			status: statusCode,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
