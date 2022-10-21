import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { firebaseAuthStore, firebaseStore } from '$stores/auth.store';
import { get } from 'svelte/store';

export const initilizeFirebase = async () => {
	console.log('init');

	if ((await get(firebaseStore)) !== null) return;

	const firebaseConfig = {
		apiKey: 'AIzaSyBWvMiQKaIj9Itm2c7Ld5YfLFq1Zhnrk88',
		authDomain: 'lankan-urban-dictionary.firebaseapp.com',
		databaseURL: 'https://lankan-urban-dictionary.firebaseio.com',
		projectId: 'lankan-urban-dictionary',
		storageBucket: 'lankan-urban-dictionary.appspot.com',
		messagingSenderId: '713804896348',
		appId: '1:713804896348:web:ca266c8088c103cfb2ae99',
		measurementId: 'G-6THGL5DTFH'
	};

	const app = initializeApp(firebaseConfig);
	const auth = getAuth();

	firebaseStore.set(app);

	auth.onAuthStateChanged(async (user) => {
		console.log('state changed', user);

		firebaseAuthStore.set({
			isLoggedIn: user !== null,
			user: user,
			loading: false
		});

		console.log(await get(firebaseAuthStore));
	});
};
