/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "375px",
				s: "426px",
				smd: "570",
				md: "768px ",
				lg: "1025px",
				xl: "1440px",
				xxl: "2450px",
			},
		},
	},
	plugins: [],
};
