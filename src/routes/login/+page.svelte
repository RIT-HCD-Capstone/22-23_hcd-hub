<div class="flex justify-center items-center md:w-8/12 mx-auto my-32">
	<form
		action="https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/auth/local"
		method="post"
		class="bg-white border-2 border-black p-4 drop-shadow-solid-1 flex flex-col gap-4 w-5/6 md:w-2/5"
	>
		<h1 class="py-4">Log In</h1>
		<div class="flex justify-between">
			<label for="email">email</label>
			<input
				type="email"
				name="email"
				id="email"
				class="border-2 border-black drop-shadow-solid-0"
			/>
		</div>
		<div class="flex justify-between">
			<label for="email">password</label>
			<input
				type="password"
				name="password"
				id="password"
				class="border-2 border-black drop-shadow-solid-0"
			/>
		</div>
		<input
			type="button"
			value="Log In"
			class="p-4 bg-brand-green border-2 border-black drop-shadow-solid-1 transition-all duration-200 hover:drop-shadow-solid-0 hover:text-white font-bold"
		/>
		<input
			type="button"
			value="Create Account"
			class="p-4 bg-brand-blue border-2 border-black drop-shadow-solid-1 transition-all duration-200 hover:drop-shadow-solid-0 hover:text-white font-bold"
		/>
	</form>
</div>
