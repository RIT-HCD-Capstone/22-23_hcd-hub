<script lang="ts">
	export let userId: number;
	export let avatarLink: string;
	export let username: string;
	export let pronouns: string;
	export let title: string;
</script>

<a
	href="/users/{userId}"
	class="pr-4 pb-4 group bg-white border-2 flex flex-col flex-wrap justify-start items-start max-w-fit border-black hover:text-white hover:bg-brand-blue drop-shadow-solid-1 hover:drop-shadow-solid-0 transition-all duration-150"
>
	<div class="flex gap-2 pb-2">
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi{avatarLink}"
			alt="{username}'s avatar"
			class="max-h-16 min-h-[4rem] border-r-2 border-b-2 border-black bg-slate-500"
		/>
		<div>
			<h3>{username}</h3>
			<h4 class="text-neutral-500 group-hover:text-neutral-200">{pronouns}</h4>
		</div>
	</div>
	<div class="p-2 max-w-prose">
		<p>{title}</p>
	</div>
</a>
