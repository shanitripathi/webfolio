/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brightness: 'var(--color-brightness)',
				midtone: 'var(--color-midtone)',
				shadow: 'var(--color-shadow)',
				main: 'var(--color-main)'
			},
			screens: {
				betterHover: { raw: '(hover: hover)' }
			}
		}
	},
	plugins: []
};
