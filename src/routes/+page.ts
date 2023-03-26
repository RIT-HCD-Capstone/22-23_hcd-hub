import { json } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const res = await fetch(
    "https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/capstone-projects",
  );
  const data = await res.json();

  return { data };
}) satisfies PageLoad;
