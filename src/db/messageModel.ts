import mongoose from 'mongoose';
import constants from '$helpers/constants';

const messageSchema = new mongoose.Schema(
	{
		message: {
			type: String,
			required: true,
			maxLength: constants.messageLength,
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
