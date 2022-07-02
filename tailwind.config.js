module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
			colors: {
				"prussian-blue": "#172A3A",
				"turquoise-blue": "#59f8e8",
				silver: "#c1c1c3",
				snow: "#edf9fc",
				"prussian-blue-dark": "#01253d",
			},
		},
	},
	plugins: [],
};
