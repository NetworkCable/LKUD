import type { FirebaseApp } from 'firebase/app';
import type { User } from 'firebase/auth';
import { writable } from 'svelte/store';

interface IFirebaseAuthStore {
	isLoggedIn: boolean;
	user: User | null;
	loading: boolean;
}

export const firebaseStore = writable<FirebaseApp | null>(null);

export const firebaseAuthStore = writable<IFirebaseAuthStore>({
	isLoggedIn: false,
	user: null,
	loading: true
});

export const user = writable<User | null>(null);
