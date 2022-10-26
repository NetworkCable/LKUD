<script>
	import Button from './Button.svelte';
</script>

<div class="w-full">
	<div class="h-screen flex flex-col w-full">
		<div class="w-full bg-lkud-red-primary px-6  lg:px-12 pt-12 pb-8 flex-grow flex flex-col">
			<div class="border-y-4 py-4 h-3/4 border-lkud-yellow-primary flex flex-col">
				<div
					class="overflow-hidden uppercase text-5xl md:text-4xl lg:text-5xl font-semibold text-lkud-yellow-primary"
				>
					<h1>Lankan</h1>
					<h1>Urban</h1>
					<h1>Dictionary</h1>
				</div>
				<div class="mt-auto flex justify-end">
					<h3 class="text-lkud-yellow-primary text-7xl ">✺</h3>
				</div>
			</div>
			<div class="w-full max-w-md mt-auto">
				<a href="/new">
					<Button variant={'secondary'}>Define a word</Button>
				</a>
			</div>
		</div>
		<div class="w-full bg-lkud-orange-primary h-7" />
		<div class="w-full bg-lkud-green-primary h-7" />
	</div>
</div>
