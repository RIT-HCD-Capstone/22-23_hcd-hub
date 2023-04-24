<script lang="ts">
	import type { User } from '$lib/ProjectTypes';
	import type { PageData } from './$types';

	export let data: PageData;
	let user = <User>data;
</script>

<svelte:head>
	<title>{user.username}</title>
</svelte:head>

<header class="flex items-center max-w-full border-b-2 border-black">
	<img
		src="https://hcd-lab.student.rit.edu/hcd-hub/strapi
		{user.avatar?.url}"
		alt="{user.username}'s profile picture"
		class="h-28 border-r-[1.5px] border-black"
	/>
	<h1 class="my-4 p-4">{user.username}</h1>
</header>
<div class="w-11/12 m-auto flex flex-row flex-wrap mt-8">
	<section class="md:w-1/2">
		<h2>About Me</h2>
		{#if user.description !== ''}
			<p>{user.description}</p>
		{:else}
			<p>seems like this user should write an "about me" section.</p>
		{/if}
	</section>
	<aside class="flex flex-col">
		<h2>Projects</h2>
		{#each user.capstone_projects as project}
			<a
				href="/capstone/AY (22-23)/{project.Title}"
				class="border-2 p-2 my-2 max-w-max bg-black text-white border-black hover:transition-all hover:text-brand-green hover:border-brand-green"
				>{project.Title}</a
			>
		{/each}
	</aside>
</div>
