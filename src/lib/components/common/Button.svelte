<script>
	export let variant = 'primary';
	export let width = 'w-full';
	export let padding = 'py-2';
</script>

<button
	class={`${width} ${padding} font-monts uppercase font-medium text-2xl`}
	class:primary={variant === 'primary'}
	class:secondary={variant !== 'primary'}
	on:click
>
	<slot />
</button>

<style>
	.primary {
		@apply bg-lkud-red-primary text-lkud-yellow-primary;
	}
	.secondary {
		@apply bg-lkud-yellow-primary text-lkud-red-primary;
	}
</style>
