import { json } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { ShortCapstoneProjects, SingleCapstoneProject } from "$lib/ProjectTypes";

let data: SingleCapstoneProject;
let targetProject: number;

export const load = (async ({ fetch, params }) => {
  const req1 = await fetch(`https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/capstone-projects`)
  let allCapstones: ShortCapstoneProjects = await req1.json()

  allCapstones.data.forEach(capstone => {
    if (capstone.attributes.Title === params.capstone_project) {
      targetProject = capstone.id
    }
  });

  const res = await fetch(
    `https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/capstone-projects/${targetProject}?populate=deep,3`,
  );
  data = await res.json();
  console.log(data);

  return data.data;
}) satisfies PageLoad;
