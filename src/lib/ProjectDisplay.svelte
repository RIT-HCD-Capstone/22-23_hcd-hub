<script lang="ts">
	/** The Project URL, relative to the site root. */
	export let URL: string;
	/** The link to the Project's Logo. Optional, defaults to null.  */
	export let Logo: string | null = null;
	/** The Project's Title.  */
	export let Title: string;

	export let active: boolean = false;
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
	class="w-56 h-80 border-2 border-black {active
		? 'inline'
		: 'hidden'} bg-white transition-all duration-200 hover:drop-shadow-solid-0 drop-shadow-solid-1"
>
	<div class="flex flex-col w-full justify-start md:justify-start items-center h-full">
		{#if Logo !== null}
			<img
				src="https://hcd-lab.student.rit.edu/hcd-hub/strapi{Logo}"
				alt="{Title}'s logo"
				class="h-56 w-56 border-b-2 bg-white border-black"
			/>
		{/if}
		<h2 class="flex-grow text-left px-4 text-3xl">{Title}</h2>
	</div>
</a>
