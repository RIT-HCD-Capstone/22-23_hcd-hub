<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/AY 22-23');
		const response = await res.json();
		return { props: { projects: response.data } };
	};
</script>

<script>
	export let projects;
</script>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold">Humanities, Computing, and Design Hub</h1>
	{#each projects as project}
		<div>
			<h1>{project.title}</h1>
		</div>
	{/each}
</div>
