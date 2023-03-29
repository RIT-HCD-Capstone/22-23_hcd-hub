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

<a href={URL} class="p-4 border-2 rounded-lg hover:border-black hover:bg-slate-50 grid grid-cols-3">
	{#if Logo !== null}
		<img
			src="https://hcd-lab.student.rit.edu/hcd-hub/strapi{Logo}"
			alt="{Title}'s logo"
			class="max-h-16"
		/>
	{/if}
	<div class="col-start-2 col-span-2 flex flex-row gap-2 items-baseline">
		<h2>{Title}</h2>
		<h3 class="text-neutral-500">{Annual_Year}</h3>
	</div>
	<p class="col-span-3">{Description}</p>
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

	<a
		href={Link}
		target="_blank"
		class="place-self-end p-2 rounded-md border-2 border-slate-700 hover:transition-all hover:text-white hover:border-white hover:bg-slate-700 hover:after:content-[&#10132;]"
		>Project Website</a
	>
</a>