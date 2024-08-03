import Message from '$db/messageModel';
import errors from '$utils/apiErrors';

export const DELETE = async (input) => {
	try {
		const id = input.params.id;
		await Message.findByIdAndDelete(id);
		return new Response(null, {
			status: 204
		});
	} catch (err: any) {
		const errorObj = err?.name === 'CastError' ? errors.invalidId : errors.server;
		const { statusCode, status, message } = errorObj;
		return new Response(JSON.stringify({ status, message }), {
			status: statusCode,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
