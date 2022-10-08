// import { page } from '$app/stores';
import admin from 'firebase-admin';

import config from '$config/config.json';
import { error, json } from '@sveltejs/kit';

if (!admin.apps.length) {
	admin.initializeApp({
		// @ts-ignore
		credential: admin.credential.cert(config)
	});
}

export async function GET({ request }: any) {
	const token = request.headers.get('firebase-token');

	if (!token) throw error(403, 'No token');

	return admin
		.auth()
		.verifyIdToken(token)
		.then((decoded) => {
			console.log(decoded.email);
			return json({ user: decoded });
		});
}
