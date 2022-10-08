<script lang="ts">
	import { firebaseAuthStore } from '$stores/auth.store';
	import { testProfile } from '$utils/api/user.util';

	let name: string;

	const onTestClick = async () => {
		let { user } = await testProfile();
		name = user.name;
	};
</script>

{JSON.stringify($firebaseAuthStore.user.email)}

<button on:click={onTestClick}>Test API route</button>

<div>Name from decode token: {name}</div>
