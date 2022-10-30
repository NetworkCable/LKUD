<script>
	import Button from '$lib/components/common/Button.svelte';
	import InputTag from '$lib/components/common/InputTag.svelte';
</script>

<div>
	<div class="text-2xl font-bold font-monts">Lankan urban dict</div>

	<div class="w-full max-w-md flex flex-col gap-3">
		<a href="/new">
			<Button>Define a word</Button>
		</a>

		<a href="/profile">
			<Button>Profile</Button>
		</a>
		<InputTag value="test" />
	</div>
</div>
