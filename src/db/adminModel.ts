import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const adminSchema = new mongoose.Schema({
	name: {
		type: String,
		default: 'Shani Tripathi',
		immutable: true
	},
	password: {
		type: String,
		required: true
	}
});

adminSchema.pre('save', async function (next) {
	if (this.isModified('password') || this.isNew) {
		try {
			const salt = await bcrypt.genSalt(10);
			this.password = await bcrypt.hash(this.password, salt);
			next();
		} catch (error: any) {
			next(error);
		}
	} else {
		next();
	}
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
