<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/common/Button.svelte';
	import { firebaseAuthStore } from '$stores/auth.store';
	import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import { onMount } from 'svelte';

	let loading = true;

	onMount(() => {
		if ($firebaseAuthStore.user !== null) goto(`/`);
		else loading = false;
	});

	const signUp = () => {
		const provider = new GoogleAuthProvider();

		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
				goto('/');
			})
			.catch((error) => {
				console.log(error.message);
				// ...
			});
	};
</script>

{#if !loading}
	<div>Login</div>

	<Button on:click={signUp}>Login with google</Button>
{/if}
