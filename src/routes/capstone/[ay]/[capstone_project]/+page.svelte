<script lang="ts">
	import type { CapstoneProject } from '$lib/ProjectTypes';
	import UserCard from '$lib/UserCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let project = <CapstoneProject>data;
	console.log(project);
</script>

<svelte:head>
	<title>{project.attributes.Title}</title>
</svelte:head>

<header class="flex items-center max-w-full border-b-2 border-black">
	{#if project.attributes.Logo?.data !== null}
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi
	{project.attributes.Logo?.data?.attributes?.url}"
			alt="{project.attributes.Title}'s logo"
			class="h-28 border-r-[1.5px] border-black"
		/>
	{/if}
	<h1 class="my-4 p-4">{project.attributes.Title}</h1>
</header>
<div class="w-11/12 m-auto flex flex-row flex-wrap mt-8">
	<div class="w-full md:w-1/2">
		<p>{project.attributes.Description}</p>
	</div>
	<div class="w-full md:w-1/2 flex justify-center items-center">
		{#if project.attributes.Link !== null}
			<a
				href={project.attributes.Link}
				target="_blank"
				class="place-self-center p-2 bg-black text-white border-2 border-black hover:transition-all duration-150 hover:border-white text-center"
				>Project Website</a
			>
		{/if}
	</div>
	<section class="w-full md:w-1/2">
		<h2>Project Contributors</h2>
		{#each project.attributes.users.data as user}
			<UserCard
				userId={user.id}
				avatarLink={user.attributes.avatar?.data?.attributes?.formats?.thumbnail?.url}
				username={user.attributes.username}
			/>
		{/each}
	</section>
	<aside class="w-full md:w-1/2">
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
	<!-- <section class="bg-red-800 w-full h-full">
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi/
			{project.attributes.proposal.data.attributes.Document.data.attributes.url}"
			alt=""
		/>
	</section> -->
</div>
