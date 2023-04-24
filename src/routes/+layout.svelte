<script>
	import { page } from '$app/stores';
	import '../app.css';
</script>

<!-- <nav class="w-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white h-14"> -->
<!-- <nav class="w-full bg-gradient-to-r from-brand-blue via-brand-green to-brand-red text-white h-14"> -->
<nav class="w-full bg-black text-white h-14 sticky">
	<div class="md:w-11/12 mx-auto flex flex-row flex-nowrap items-center justify-end">
		<!-- TODO add logo -->
		<a href="/" class="text-xl flex-grow pl-4 md:pl-0 font-bold">
			<span class="text-brand-red">H</span><span class="text-brand-green">C</span><span
				class="text-brand-blue">D</span
			>
			Hub
			<!-- {$page.data.url ? '' : 'Humanities, Computing, and Design Hub'} -->
		</a>
		<a
			href="/"
			class="{$page.route.id == '/'
				? 'bg-brand-red'
				: ''} p-4 border-l-2 border-black hover:bg-brand-green">Home</a
		>

		<a
			href="/login"
			class="{$page.route.id == '/login'
				? 'bg-brand-red'
				: ''} p-4 md:border-r-2 border-l-2 border-black hover:bg-brand-green">Log In</a
		>
	</div>
</nav>
<main class="min-h-screen">
	<slot />
</main>

<footer class="w-full bg-black text-white h-14 flex flex-row-reverse">
	<a
		href="/about"
		class="{$page.route.id == '/about'
			? 'bg-brand-red'
			: ''} p-4 hidden md:inline border-l-2 border-black hover:bg-brand-green">About</a
	>
</footer>
