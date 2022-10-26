/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				monts: 'Montserrat'
			},
			colors: {
				'lkud-red': {
					primary: '#8D153A',
					secondary: '#D98484'
				},
				'lkud-yellow': {
					primary: '#FFBE29'
				},
				'lkud-green': {
					primary: '#00722A'
				},
				'lkud-gray': {
					primary: '#C4C4C4'
				},
				'lkud-orange': {
					primary: '#FF7300'
				},
				'lkud-white': {
					primary: '#F5F5F5'
				}
			}
		}
	},
	plugins: []
};
