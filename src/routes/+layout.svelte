<script>
	import '@fontsource/montserrat';
	import '../app.css';

	import { browser } from '$app/environment';
	import { firebaseAuthStore } from '$stores/auth.store';
	import { initilizeFirebase } from '$utils/firebase.util';

	import Sidebar from '$lib/components/common/Sidebar.svelte';
	import Container from '$lib/components/common/Container.svelte';

	if (browser) initilizeFirebase();
</script>

{#if !$firebaseAuthStore.loading}
	<main class="grid grid-cols-12">
		<div class=" col-span-12 md:col-span-5 lg:col-span-4">
			<Sidebar />
		</div>
		<div class="col-span-12 md:col-span-7 lg:col-span-8 pt-6 md:pt-8 bg-lkud-white-primary">
			<Container>
				<slot />
			</Container>
		</div>
	</main>
{/if}
