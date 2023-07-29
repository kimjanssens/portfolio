module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
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
