<script>
	import { page } from '$app/stores';
	import '../app.css';
</script>

<nav class="w-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white h-14">
	<div class="md:w-11/12 mx-auto flex flex-row flex-nowrap items-center justify-end">
		<!-- TODO add logo -->
		<p class="text-xl flex-grow pl-4 md:pl-0">
			{$page.data.url ? '' : 'HCD Hub'}
			<!-- {$page.data.url ? '' : 'Humanities, Computing, and Design Hub'} -->
		</p>
		<a href="/" class="p-4 border-l-2 border-black hover:bg-black">Home</a>
		<a href="/" class="p-4 hidden md:inline border-l-2 border-black hover:bg-black">Years</a>
		<a href="/" class="p-4 hidden md:inline border-l-2 border-black hover:bg-black">All Projects</a>
		<a href="/" class="p-4 hidden md:inline border-l-2 border-black hover:bg-black">About</a>
		<a href="/" class="p-4 md:border-r-2 border-l-2 border-black hover:bg-black">Log In</a>
	</div>
</nav>
<main>
	<slot />
</main>
