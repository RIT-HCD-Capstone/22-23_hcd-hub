import { json } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { AllCapstoneProjects } from "$lib/ProjectTypes";

let data: AllCapstoneProjects;

export const load = (async ({ fetch }) => {
  const res = await fetch(
    "https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/capstone-projects?populate=*",
  );
  data = await res.json();

  return data;
}) satisfies PageLoad;
