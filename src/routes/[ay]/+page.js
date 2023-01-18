import { json } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const response = await fetch('http://localhost:1337/api/capstone-annual-years', {
    method: 'GET',
    headers: {
      Authorization:
        'bearer 90fd8bd73f326d2cabc81f528e2f4d67a9070ca8123a96e7e1a90c6c7df027483f32f885e8b48060bc0d9fa45cf20d4fc863897bcd4167a1f264bf21e6b80928dfd0eeb7faa649d929d9e25dfbe7637e23c8ce2f2c778483e47668cf44e4d51df9b4f3b9045d48425d539825596111f00f265355606870653d550e7c70b12c99'
    },
    mode: 'same-origin'
  });
  console.log(response);
  return { props: { data: response, params: params } };
}


// 3 steps to get started
// Step 3: Completed ✅
// See content in action by making an HTTP request:

//     To this URL: https://<YOUR_DOMAIN>/api/<YOUR_CT>
//     With the header: Authorization: bearer <YOUR_API_TOKEN>

// For more ways to interact with content, see the documentation.
