<script lang="ts">
	import type { User } from '$lib/ProjectTypes';
	import type { PageData } from './$types';

	export let data: PageData;
	let user = <User>data;
</script>

<svelte:head>
	<title>{user.username}</title>
</svelte:head>

<main class="m-4 grid grid-cols-2 gap-4">
	<header class="flex items-center max-w-sm col-span-2">
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi
		{user.avatar?.url}"
			alt="{user.username}'s profile picture"
			class="max-h-16 min-h-[4rem] border-solid border-2 border-slate-400 shadow-slate-300 shadow-md rounded-md m-4"
		/>
		<h1>{user.username}</h1>
	</header>
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
</main>
