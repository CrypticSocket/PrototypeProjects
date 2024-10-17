/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#FFA441",
					100: "#FBF5EC",
					400: "#FFA441",
					500: "#FF7E1D",
					600: "#EE853A",
					700: "#E1894B",
				},
				secondary: {
					green: "#00FF00",
					purple: {
						800: "#62388A",
					},
				},
				text: {
					main: "#393938",
					sub: "#5B6073",
				},
				button: {
					gray: "#F2F2F2",
				},
			},
		},
	},
	plugins: [],
};
