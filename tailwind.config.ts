import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: {
				red: "var(--color-primary-red)",
				blue: "var(--color-primary-blue)",
				yellow: "var(--color-primary-yellow)",
				green: "var(--color-primary-green)",
			},
			secondary: {
				darkBlue: "var(--color-secondary-dark-blue)",
				lightBlue: "var(--color-secondary-light-blue)",
				orange: "var(--color-secondary-orange)",
				brown: "var(--color-secondary-brown)",
			},
			gray: {
				100: "var(--color-gray-100)",
				200: "var(--color-gray-200)",
				300: "var(--color-gray-300)",
				400: "var(--color-gray-400)",
				500: "var(--color-gray-500)",
				600: "var(--color-gray-600)",
				700: "var(--color-gray-700)",
				800: "var(--color-gray-800)",
				900: "var(--color-gray-900)",
			},
			status: {
				success: "var(--color-status-success)",
				warning: "var(--color-status-warning)",
				danger: "var(--color-status-danger)",
				info: "var(--color-status-info)",
			},
			text: {
				primary: "var(--color-text-primary)",
				secondary: "var(--color-text-secondary)",
				inverse: "var(--color-text-inverse)",
			},
		},
	},
	plugins: [],
};
export default config;
