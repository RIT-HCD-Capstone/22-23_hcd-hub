// src/routes/posts.ts
// import type { EndpointOutput } from '@sveltejs/kit';
export async function get() {
  const res = await fetch('http://localhost:1337/AY 22-23/projects?populate=*');
  const data = await res.json();
  return { body: data };
}
// #Ignore the typings if you're using javascript.