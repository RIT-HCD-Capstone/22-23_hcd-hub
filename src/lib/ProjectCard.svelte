<script lang="ts">
	/** The Project URL, relative to the site root. */
	export let URL: string;
	/** Outside link to the Project website, if existing. */
	export let Link: string;
	/** The link to the Project's Logo. Optional, defaults to null.  */
	export let Logo: string | null = null;
	/** The Project's Title.  */
	export let Title: string;
	/** The Project's Description.  */
	export let Description: string;
	/** The Project's Annual Year.  */
	export let Annual_Year: string;
	/** The Project's Proposal.  */
	// export let Proposal;
	/** The Project's number of existing Public Facing Reports. Optional, defaults to null.  */
	export let Num_PFRs: number | string | null = null;
	/** The Project's number of Users. Optional, defaults to null.  */
	export let Num_Users: number | string | null = null;
</script>

<!--
	@component
	ProjectCard provides a brief overview of the relevant information about each Capstone Project.

	@param {string} Logo - path to the project's Logo.
	@param {string} Title - the project's Title.
	@param {string} Description - the Description of the project.
	@param {string} Annual_Year - the current Annual Year.
	@param {number} Num_PFRs - the number of existing PFRs.
	@param {string} Link - an external link to the project site, if any.
	- Example Usage:
	  ```tsx
	  <ProjectCard
	    Logo={'project_name/assets/logo.png'}
	    Title={'A very nice title'}
	    Description={'A very nice description'}
	    Annual_Year={'AY (22-23)'}
	    Num_PFRs={25}
	    Link={'https://hcd-lab.student.rit.edu'}
		/>
	  ```
  -->

<a
	href="/capstone/{URL}"
	title={Title}
	class="bg-slate-50 border-2 border-black hover:bg-slate-50 flex flex-col min-h-[22rem] transition-all duration-200 hover:drop-shadow-solid-0 drop-shadow-solid-1"
>
	<div class="bg-slate-50 flex flex-col h-full">
		<div class="flex flex-row w-full col-span-3 justify-start items-center max-h-16 gap-2 py-3">
			{#if Logo !== null}
				<img
					src="https://hcd-lab.student.rit.edu/hcd-hub/strapi{Logo}"
					alt="{Title}'s logo"
					class="h-16 border-r-[1.5px] border-b-[1.5px] border-black"
				/>
			{/if}
			<div class="flex flex-row w-full items-baseline justify-around">
				{#if Logo !== null}
					<h2 class="flex-grow max-w-[12ch] truncate">{Title}</h2>
				{:else}
					<h2 class="flex-grow truncate px-4">{Title}</h2>
				{/if}
				<h3 class="text-neutral-500 justify-self-end hover:underline pr-4">
					<a href="/capstone/{Annual_Year}">{Annual_Year.slice(4, 9)}</a>
				</h3>
			</div>
		</div>
		<p class="p-4 col-span-3 h-full w-full max-h-60 overflow-scroll justify-self-start self-start">
			{Description}
		</p>
	</div>
	<div
		class="w-full flex flex-row justify-between bg-black text-white border-2 border-white border-t-black p-4 place-self-end transition-all duration-200"
	>
		{#if Num_PFRs !== null || Num_Users !== null}
			<div>
				{#if Num_Users !== null}
					<p
						class="underline decoration-2 decoration-brand-blue hover:text-brand-blue transition-all duration-200"
					>
						Project Members: {Num_Users}
					</p>
				{/if}
				{#if Num_PFRs !== null}
					<p
						class="underline decoration-2 decoration-brand-red hover:text-brand-red transition-all duration-200"
					>
						PFRs: {Num_PFRs}
					</p>
				{/if}
			</div>
		{/if}
		{#if Link !== null}
			<a
				href={Link}
				target="_blank"
				class="place-self-end p-2 bg-black border-2 border-white hover:transition-all duration-150 hover:border-brand-green hover:text-brand-green text-center"
				>Project Website</a
			>
		{/if}
	</div>
</a>
