<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>HCD Hub</title>
</svelte:head>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold py-4">Humanities, Computing, and Design Hub</h1>
	{#each data.data.data as project}
		<div class="p-4 border border-red-500 mx-5 my-2">
			<!-- <h1>{JSON.stringify(project.attributes.Title)}</h1> -->
			<h1>{project.attributes.Title}</h1>
			<p>{project.attributes.Description}</p>
		</div>
	{/each}
</div>
