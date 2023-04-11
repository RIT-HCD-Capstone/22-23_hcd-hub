import type { PageLoad } from "./$types";
import type { User } from "$lib/ProjectTypes";

let data: User;

export const load = (async ({ fetch, params }) => {
  const res = await fetch(
    `https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/users/${params.user}?populate=*`,
  );
  data = await res.json();
  console.log(data);
  return data;
}) satisfies PageLoad;
