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
	  ```tsx
	  <ProjectCard
	    Title={'A very nice title'}
	    Description={'A very nice description'}
	    Annual_Year={'AY (22-23)'}
	    Num_PFRs={25}
	    Link={'https://hcd-lab.student.rit.edu'}
		/>
	  ```
	  ```tsx
	  <ProjectCard
	    Logo={'project_name/assets/logo.png'}
	    Title={'A very nice title'}
	    Description={'A very nice description'}
	    Annual_Year={'AY (22-23)'}
	    Link={'https://hcd-lab.student.rit.edu'}
		/>
	  ```
	  ```tsx
	  <ProjectCard
	    Title={'A very nice title'}
	    Description={'A very nice description'}
	    Annual_Year={'AY (22-23)'}
	    Link={'https://hcd-lab.student.rit.edu'}
		/>
	  ```
  -->

<a
	href="/capstone/{URL}"
	class="p-4 border-2 rounded-lg hover:border-black hover:bg-slate-50 grid grid-cols-3 gap-2 grid-flow-row-dense"
>
	<div class="flex flex-row w-full col-span-3 justify-start items-center max-h-12 gap-2 py-2">
		{#if Logo !== null}
			<img
				src="https://hcd-lab.student.rit.edu/hcd-hub/strapi{Logo}"
				alt="{Title}'s logo"
				class="max-h-16"
			/>
		{/if}
		<div class="flex flex-row w-full max-w-full justify-between gap-2 items-baseline">
			<h2 class="max-w-[10ch] max-h-24 truncate" title={Title}>{Title}</h2>
			<h3 class="text-neutral-500 justify-self-end">{Annual_Year}</h3>
		</div>
	</div>
	<p class="col-span-3 max-h-60 overflow-scroll justify-self-start self-start">{Description}</p>
	{#if Num_PFRs !== null || Num_Users !== null}
		<div class="col-span-2">
			{#if Num_PFRs !== null}
				<p>Number of PFRs released: {Num_PFRs}</p>
			{/if}
			{#if Num_Users !== null}
				<p>Number of project members: {Num_Users}</p>
			{/if}
		</div>
	{/if}

	{#if Link !== null}
		<a
			href={Link}
			target="_blank"
			class="place-self-start p-2 rounded-md border-2 border-slate-700 hover:transition-all hover:text-white hover:border-white hover:bg-slate-700 hover:after:content-[&#10132;]"
			>Project Website</a
		>
	{/if}
</a>
