<script lang="ts">
	export let value: string | number;
</script>

<input
	type="text"
	class="h-12 w-full rounded-md border-2 border-solid border-lkud-red-primary  bg-lkud-white-primary px-4 text-lkud-red-primary font-medium
	focus:border-lkud-red-primary"
	bind:value
/>
