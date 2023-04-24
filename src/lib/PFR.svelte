<script lang="ts">
	export let title: string;
	export let date: string;
	export let report: string;

	let openState: boolean = false;
</script>

<article class="pb-2 border-b last:border-none border-black">
	<header
		on:click={() => (openState ? (openState = false) : (openState = true))}
		on:keypress={() => (openState ? (openState = false) : (openState = true))}
		class="flex flex-row items-baseline gap-2"
	>
		<h3 class="flex-grow">{title}</h3>
		<p class="pl-2 text-sm text-neutral-500">{date}</p>
		<img
			class="self-center {openState ? 'rotate-180' : ''}"
			src="/icons/chevron-down.svg"
			alt="chevron pointing down"
		/>
	</header>
	<p class="max-w-prose {openState ? 'inline' : 'hidden'}">{report}</p>
</article>
