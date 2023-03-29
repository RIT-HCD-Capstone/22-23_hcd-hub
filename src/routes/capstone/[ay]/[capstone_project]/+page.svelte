<script lang="ts">
	import type { CapstoneProject } from '$lib/ProjectTypes';
	import UserCard from '$lib/UserCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let project = <CapstoneProject>data.data;
</script>

<svelte:head>
	<title>{project.attributes.Title}</title>
</svelte:head>

<main class="m-4 grid md:grid-cols-2 gap-4">
	<header class="flex items-center max-w-sm col-span-2">
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi
		{project.attributes.Logo?.data?.attributes?.url}"
			alt="{project.attributes.Title}'s logo"
			class="max-h-16 min-h-[4rem] border-solid border-2 border-slate-400 shadow-slate-300 shadow-md rounded-md m-4"
		/>
		<h1>{project.attributes.Title}</h1>
	</header>
	<p>{project.attributes.Description}</p>
	<a
		href={project.attributes.Link}
		target="_blank"
		class="place-self-center p-2 rounded-md border-2 border-slate-700 hover:transition-all hover:text-white hover:border-white hover:bg-slate-700 hover:after:content-[&#10132;]"
		>Project Website</a
	>
	<section class="col-start-1">
		<h2>Project Contributors</h2>
		{#each project.attributes.users.data as user}
			<UserCard
				userId={user.id}
				username={user.attributes.username}
				avatarLink={user.attributes.avatar?.data?.attributes?.formats?.thumbnail?.url}
			/>
		{/each}
	</section>
	<aside class="">
		<h2>Public Facing Reports</h2>
		{#each project.attributes.public_facing_reports.data as report}
			<article class="pb-2 border-b last:border-none border-black">
				<header class="flex flex-row items-baseline">
					<h3>{report.attributes.Title}</h3>
					<p class="pl-2 text-sm text-neutral-500">{report.attributes.Date}</p>
				</header>
				<p class="">{report.attributes.Report}</p>
			</article>
		{/each}
	</aside>

	<!-- <ProjectCard
		URL={project.attributes.annual_year.data.attributes.Year + '/' + project.id}
		Logo={project.attributes.Logo?.data?.attributes?.url}
		Title={project.attributes.Title}
		Description={project.attributes.Description}
		Annual_Year={project.attributes.annual_year.data.attributes.Year}
		Num_PFRs={project.attributes.public_facing_reports?.data?.length}
		Link={project.attributes.Link}
	/> -->
</main>
