import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
import daisyui from "daisyui";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Helvetica Neue", ...fontFamily.sans],
				serif: [...fontFamily.serif],
				agrandir: ["Agrandir", ...fontFamily.sans],
				telegraf: ["Telegraf", ...fontFamily.sans],
			},
			colors: {
				accent: "var(--color-accent)",
				secondary: "var(--color-secondary)",
				light: "var(--color-light)",
			},
			backgroundImage: {
				heroImage: "url('/bg.png')",
			},
			keyframes: {
				animategradient: {
					"0%, 50%": { backgroundPosition: "0%, 50%" },
					"50%, 100%": { backgroundPosition: "100%, 50%" },
					"100%, 50%": { backgroundPositionposition: "0%, 50%" },
				},
			},
		},
	},
	plugins: [
		daisyui,
	],
	daisyui: {
		themes:[
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'luxury',
			'dracula',
			'cmyk',
			'pastel',
			'fantasy',
			'wireframe',
			'autumn',
			'black',
			'lofi',
			'coffee',
			'winter',
			'dim',
			'nord',
			'sunset',
			'caramellatte',
			'abyss',
			'silk'
		],
	}
	
};
export default config;
