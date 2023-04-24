<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';
	import ProjectDisplay from '$lib/ProjectDisplay.svelte';
	import type { CapstoneProject } from '$lib/ProjectTypes';
	import type { PageData } from './$types';

	export let data: PageData;
	let projects = <CapstoneProject[]>data.data;
</script>

<svelte:head>
	<title>HCD Hub</title>
</svelte:head>

<div class="w-full py-4">
	<div class="w-11/12 mx-auto min-h-min h-3/6">
		<h1 class="py-6">This Year's Capstones</h1>
		<div class="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
			{#each projects as project}
				{#if project.attributes.priority_display === true}
					<ProjectDisplay
						URL={project.attributes?.annual_year.data.attributes?.Year +
							'/' +
							project.attributes.Title}
						Logo={project.attributes?.Logo?.data?.attributes?.url}
						Title={project.attributes?.Title}
						active={true}
					/>
				{/if}
			{/each}
		</div>
	</div>
</div>

<div class="w-full py-4">
	<div class="w-11/12 mx-auto min-h-screen">
		<h1 class="py-6">All Capstones</h1>
		<section class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4">
			{#each projects as project}
				<ProjectCard
					URL={project.attributes?.annual_year.data.attributes?.Year +
						'/' +
						project.attributes.Title}
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
</div>
