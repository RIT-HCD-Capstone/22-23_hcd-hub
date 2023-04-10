<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
	import type { AllCapstoneProjects } from '$lib/ProjectTypes';
	import type { PageData } from './$types';

	export let data: PageData;
	let projects = <AllCapstoneProjects>data.data;
	console.log('projects: ' + projects);
	console.log('projects.length: ' + projects.length);
	console.log('projects.toString(): ' + projects.toString());
</script>

<svelte:head>
	<title>HCD Hub</title>
</svelte:head>

<div class="my-4">
	<h1 class="text-3xl font-bold p-4">Humanities, Computing, and Design Hub</h1>
	<section class="mx-4 grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-6">
		{#each projects as project}
			<ProjectCard
				URL={project.attributes?.annual_year.data.attributes?.Year + '/' + project.attributes.Title}
				Logo={project.attributes?.Logo?.data?.attributes?.url}
				Title={project.attributes?.Title}
				Description={project.attributes?.Description}
				Annual_Year={project.attributes?.annual_year.data.attributes?.Year}
				Num_PFRs={project.attributes.public_facing_reports?.data?.length}
				Link={project.attributes?.Link}
				Num_Users={project.attributes?.users?.data?.length}
			/>
		{/each}
	</section>
</div>
