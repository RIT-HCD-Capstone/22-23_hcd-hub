/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			dropShadow: {
        'solid-0': '2px 2px 0 rgba(0, 0, 0, 1)',
        'solid-1': '10px 10px 0 rgba(0, 0, 0, 1)',
      },
			colors: {
				'brand-blue': 'rgb(21, 156, 189)',
				'brand-green': 'rgb(131, 191, 65)',
				'brand-red': 'rgb(219, 44, 39)',
			}
		}
	},
	plugins: []
};
