import { dev } from '$app/environment';
import Admin from '$db/adminModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { VITE_JWT_SECRET } = import.meta.env;

export const POST = async ({ request, cookies }) => {
	try {
		const body = await request.json();
		const admin = await Admin.findOne({ name: body.name });
		if (!admin) {
			throw new Error('Admin not found');
		}
		if (!body.password) {
			throw new Error('Password is required');
		}
		const isMatch = await bcrypt.compare(body.password, admin.password);
		if (!isMatch) {
			throw new Error('Invalid credentials');
		}

		if (!VITE_JWT_SECRET) {
			throw new Error('jwt secret is not defined');
		}
		// if the password is correct send a jwt token
		const token = jwt.sign({ userId: admin._id }, VITE_JWT_SECRET, {
			expiresIn: '24h'
		});

		cookies.set('token', token, {
			path: '/',
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
			secure: !dev,
			httpOnly: false
		});

		return new Response(
			JSON.stringify({ status: 'success', message: 'Admin logged in successfully!' }),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} catch (err: any) {
		return new Response(JSON.stringify({ status: 'fail', message: err.message }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
