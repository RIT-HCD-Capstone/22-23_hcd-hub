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

<div class="m-4 flex flex-col gap-4">
	<header class="flex items-center max-w-full">
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi
		{project.attributes.Logo?.data?.attributes?.url}"
			alt="{project.attributes.Title}'s logo"
			class="max-h-16 min-h-[4rem] border-solid border-2 border-slate-400 shadow-slate-300 shadow-md rounded-md m-4"
		/>
		<h1>{project.attributes.Title}</h1>
	</header>
	<p>{project.attributes.Description}</p>
	{#if project.attributes.Link !== null}
		<a
			href={project.attributes.Link}
			target="_blank"
			class="place-self-center p-2 rounded-md border-2 border-slate-700 hover:transition-all hover:text-white hover:border-white hover:bg-slate-700 hover:after:content-[&#10132;]"
			>Project Website</a
		>
	{/if}
	<section class="col-start-1">
		<h2>Project Contributors</h2>
		{#each project.attributes.users.data as user}
			<UserCard
				userId={user.id}
				avatarLink={user.attributes.avatar?.data?.attributes?.formats?.thumbnail?.url}
				username={user.attributes.username}
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
	<!-- <section class="bg-red-800 w-full h-full">
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi/
			{project.attributes.proposal.data.attributes.Document.data.attributes.url}"
			alt=""
		/>
	</section> -->
</div>
