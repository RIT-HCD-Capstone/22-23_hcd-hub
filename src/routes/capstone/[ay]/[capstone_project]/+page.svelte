<script lang="ts">
	import type { CapstoneProject } from '$lib/ProjectTypes';
	import UserCard from '$lib/UserCard.svelte';
	import PFR from '$lib/PFR.svelte';
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
	<div class="w-full md:w-1/2 max-w-prose">
		<p>{project.attributes.Description}</p>
	</div>
	<div class="w-full md:w-1/2 flex justify-center items-center mt-4">
		{#if project.attributes.Link !== null}
			<a
				href={project.attributes.Link}
				target="_blank"
				class="place-self-center p-2 bg-black text-white border-2 border-black hover:transition-all duration-200 hover:border-brand-green hover:text-brand-green text-center"
				>Project Website</a
			>
		{/if}
	</div>
	<section class="w-full md:w-1/2 my-4">
		<h2>Project Contributors</h2>
		<div class="flex flex-col gap-4">
			{#each project.attributes.member_roles as role}
				<UserCard
					userId={role.users_permissions_user.data.id}
					avatarLink={role.users_permissions_user.data.attributes.avatar?.data?.attributes?.formats
						?.thumbnail?.url}
					username={role.users_permissions_user.data.attributes.name}
					pronouns={role.users_permissions_user.data.attributes.pronouns}
					title={role.role}
				/>
			{/each}
		</div>
	</section>
	<aside class="w-full md:w-1/2 my-4">
		<h2>Public Facing Reports</h2>
		{#each project.attributes.public_facing_reports.data as report}
			<PFR
				title={report.attributes.Title}
				date={report.attributes.Date}
				report={report.attributes.Report}
			/>
		{/each}
	</aside>
</div>
