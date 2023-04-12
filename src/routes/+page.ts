import { json } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { AllCapstoneProjects } from "$lib/ProjectTypes";

let data: AllCapstoneProjects;

export const load = (async ({ fetch }) => {
  const res = await fetch(
    "https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/capstone-projects?populate=*",
  );
  data = await res.json();
  data.data = data.data.sort((n1, n2) => parseInt(n2.attributes.annual_year.data.attributes.Year.substring(7, 9)) - parseInt(n1.attributes.annual_year.data.attributes.Year.substring(7, 9)));
  return data;

}) satisfies PageLoad;
