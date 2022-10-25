<script>
	export let variant = 'primary';
</script>

<button
	class={`w-full ${
		variant === 'primary'
			? 'bg-lkud-red-primary text-2xl py-2 text-lkud-yellow-primary'
			: ' bg-lkud-yellow-primary text-lkud-red-primary text-2xl py-2'
	}  font-monts`}
	on:click
>
	<slot />
</button>
