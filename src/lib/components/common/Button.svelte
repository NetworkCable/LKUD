<script>
	export let variant = 'primary';
	export let width = 'w-full';
	export let padding = 'py-2';
</script>

<button
	class={`${width} ${padding} ${
		variant === 'primary'
			? 'bg-lkud-red-primary text-lkud-yellow-primary'
			: ' bg-lkud-yellow-primary text-lkud-red-primary'
	}  font-monts uppercase font-medium text-2xl`}
	on:click
>
	<slot />
</button>
