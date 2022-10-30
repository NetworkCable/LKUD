<script lang="ts">
	export let variant: string = 'primary';
	export let width: string = 'w-full';
	export let padding: string = 'py-2';
</script>

<button
	class={`${width} ${padding} font-monts uppercase font-medium text-2xl`}
	class:primary={variant === 'primary'}
	class:secondary={variant === 'secondary'}
	on:click
>
	<slot />
</button>

<style lang="postcss">
	.primary {
		@apply bg-lkud-red-primary text-lkud-yellow-primary;
	}
	.secondary {
		@apply bg-lkud-yellow-primary text-lkud-red-primary;
	}
</style>
