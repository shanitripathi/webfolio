export default {
	server: {
		statusCode: 500,
		status: 'fail',
		message: 'Something went wrong!🎆'
	},
	invalidId: {
		statusCode: 400,
		status: 'fail',
		message: 'Invalid ID'
	},
	tooManyRequests: {
		statusCode: 429,
		status: 'fail',
		message: 'You have already sent a message. Try again after 24 hours.'
	}
};
