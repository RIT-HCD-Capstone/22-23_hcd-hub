<script>
	import '../app.css';
</script>

<nav class="w-full bg-teal-400 h-14 flex flex-row items-center justify-start">
	<a href="/" class="p-4 border-r-2">HCD Hub</a>
	<!-- <a href="https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/connect/google/callback"
			>Login With Google</a
		> -->
</nav>
<main class="w-11/12 mx-auto">
	<slot />
</main>
