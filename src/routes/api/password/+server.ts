import Admin from '$db/adminModel';

export const POST = async ({ request }) => {
	try {
		const adminExists = (await Admin.find()).length > 0;
		if (adminExists) {
			throw new Error('Admin already exists');
		}
		const body = await request.json();
		const admin = await Admin.create(body);
		return new Response(
			JSON.stringify({ status: 'success', message: 'Admin created successfully' }),
			{ status: 201, headers: { 'Content-Type': 'application/json' } }
		);
	} catch (err: any) {
		return new Response(JSON.stringify({ status: 'fail', message: err.message }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
