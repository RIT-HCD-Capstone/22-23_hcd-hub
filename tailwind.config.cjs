/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			dropShadow: {
        'solid-0': '2px 2px 0 rgba(0, 0, 0, 1)',
        'solid-1': '10px 10px 0 rgba(0, 0, 0, 1)',
      }
		}
	},
	plugins: []
};
