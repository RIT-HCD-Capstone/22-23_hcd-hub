<script lang="ts">
	import type { User } from '$lib/ProjectTypes';
	import type { PageData } from './$types';

	export let data: PageData;
	let user = <User>data;
</script>

<svelte:head>
	<title>{user.username}</title>
</svelte:head>

<div class="m-4 md:grid md:auto-cols-min md:grid-cols-2">
	<header class="flex items-center max-w-sm col-span-2">
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi
		{user.avatar?.url}"
			alt="{user.username}'s profile picture"
			class="max-h-16 min-h-[4rem] rounded-full m-4 border-black border-2"
		/>
		<h1>{user.username}</h1>
	</header>
	<section class="md:w-2/3">
		<h2>About Me</h2>
		<p>this will be a user's "about me" section.</p>
	</section>
	<aside class="flex flex-col">
		<h2>Projects</h2>
		{#each user.capstone_projects as project}
			<a
				href="/capstone/AY (22-23)/{project.Title}"
				class="border-2 rounded-md p-2 m-2 max-w-max border-slate-700 hover:transition-all hover:text-white hover:border-white hover:bg-slate-700"
				>{project.Title}</a
			>
		{/each}
	</aside>
</div>
