<script lang="ts">
	export let userId: number;
	export let avatarLink: string;
	export let username: string;
</script>

<a
	href="/users/{userId}"
	class="border-2 rounded-md p-1 flex flex-col justify-center items-center max-w-max border-slate-700 hover:transition-all hover:text-white hover:border-white hover:bg-slate-700"
>
	<img
		src="https://hcd-lab.student.rit.edu/hcd-hub/strapi{avatarLink}"
		alt="{username}'s avatar"
		class="max-h-16 min-h-[4rem] rounded-full m-4"
	/>
	<h3><a href="/users/{userId}">{username}</a></h3>
</a>
