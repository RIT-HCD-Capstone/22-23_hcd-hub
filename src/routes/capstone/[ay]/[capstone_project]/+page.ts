import { json } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { AllUsers, SingleCapstoneProject, User } from "$lib/ProjectTypes";

let data: SingleCapstoneProject;
// let users: User[] = [];
// let userData: AllUsers;
// let filteredUserData: AllUsers;

export const load = (async ({ fetch, params }) => {
  const res = await fetch(
    `https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/capstone-projects/${params.capstone_project}?populate=deep,3`,
  );
  data = await res.json();
  console.log(data);

  // let data = { pageData, userData };

  return data;
}) satisfies PageLoad;
