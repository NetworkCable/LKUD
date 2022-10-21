<script>
	import Button from '$lib/components/common/Button.svelte';
	import Container from '$lib/components/common/Container.svelte';
</script>

<Container>
	<div class="text-2xl font-bold font-monts">Lankan urban dict</div>

	<div class="w-full max-w-md flex flex-col gap-3">
		<a href="/new">
			<Button>Define a word</Button>
		</a>

		<a href="/profile">
			<Button>Profile</Button>
		</a>
	</div>
</Container>
