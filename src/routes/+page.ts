import { json } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { AllCapstoneProjects } from "$lib/ProjectTypes";

let data: AllCapstoneProjects;

export const load = (async ({ fetch }) => {
  const res = await fetch(
    "https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/capstone-projects?populate=*",
  );
  data = await res.json();
  // const parsedData = JSON.stringify(returnedData);
  console.log(data);
  // for (let index = 0; index < returnedData.length; index++) {
  //   const project = new CapstoneProject(returnedData[index]);
  //   // const element = array[index];
  //   data.push(project);
  // }

  // returnedData.forEach((item: CapstoneProject) => {
  //   let project = {
  //     id: item.id,
  //     attributes: {
  //       Title: item.attributes.Title,
  //       Description: item.attributes.Description,
  //       createdAt: item.attributes.createdAt,
  //       updatedAt: item.attributes.updatedAt,
  //       Logo: item.attributes.Logo,
  //     },
  //   };
  //   data.push(project);
  // });

  return data;

  // });

  return { data };
}) satisfies PageLoad;
