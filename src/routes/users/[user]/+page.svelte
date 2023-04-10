<script lang="ts">
	import type { User } from '$lib/ProjectTypes';
	import type { PageData } from './$types';

	export let data: PageData;
	let user = <User>data;
</script>

<svelte:head>
	<title>{user.username}</title>
</svelte:head>

<div class="m-4 grid grid-cols-2 gap-4">
	<header class="flex items-center max-w-sm col-span-2">
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi
		{user.avatar?.url}"
			alt="{user.username}'s profile picture"
			class="max-h-16 min-h-[4rem] rounded-full m-4 border-black border-2"
		/>
		<h1>{user.username}</h1>
	</header>
	<aside>
		<h2>Projects</h2>
		{#each user.capstone_projects as project}
			<a
				href="/capstone/AY (22-23)/{project.id}"
				class="border-2 rounded-md p-2 m-2 max-w-max border-slate-700 hover:transition-all hover:text-white hover:border-white hover:bg-slate-700"
				>{project.Title}</a
			>
		{/each}
	</aside>
	<!-- <p>{user.attributes.Description}</p>
	<aside class="">
		<h2>Public Facing Reports</h2>
		{#each user.attributes.public_facing_reports.data as report}
			<article class="pb-2 border-b border-black">
				<header class="flex flex-row items-baseline">
					<h3>{report.attributes.Title}</h3>
					<p class="pl-2 text-sm text-neutral-500">{report.attributes.Date}</p>
				</header>
				<p class="">{report.attributes.Report}</p>
			</article>
		{/each}
	</aside> -->
</div>
