import type { PageLoad } from './$types';
import type { AllAnnualYears, SingleAnnualYear } from '$lib/ProjectTypes';

let data: SingleAnnualYear;
let yearId: number;

export const load = (async ({ fetch, params }) => {
	const req1 = await fetch(`https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/annual-years`);
	let allCapstones: AllAnnualYears = await req1.json();

	allCapstones.data.forEach((year) => {
		if (year.attributes.Year === params.ay) {
			yearId = year.id;
		}
	});

	const res = await fetch(
		`https://hcd-lab.student.rit.edu/hcd-hub/strapi/api/annual-years/${yearId}?populate=deep,2`
	);
	data = await res.json();
	console.log(data);
	return data;
}) satisfies PageLoad;
