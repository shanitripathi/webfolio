import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
	{
		message: {
			type: String,
			required: true,
			maxLength: 500,
			trim: true,
			validate: {
				validator: function (text) {
					return text !== 'hello shani';
				},
				message: 'Message cannot be this'
			}
		},
		createdAt: {
			type: Date,
			default: Date.now,
			immutable: true
		}
	},
	{ versionKey: false }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
