import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	colors: {
    		primary: {
    			red: 'var(--color-primary-red)',
    			blue: 'var(--color-primary-blue)',
    			yellow: 'var(--color-primary-yellow)',
    			green: 'var(--color-primary-green)'
    		},
    		secondary: {
    			darkBlue: 'var(--color-secondary-dark-blue)',
    			lightBlue: 'var(--color-secondary-light-blue)',
    			orange: 'var(--color-secondary-orange)',
    			brown: 'var(--color-secondary-brown)'
    		},
    		gray: {
    			'100': 'var(--color-gray-100)',
    			'200': 'var(--color-gray-200)',
    			'300': 'var(--color-gray-300)',
    			'400': 'var(--color-gray-400)',
    			'500': 'var(--color-gray-500)',
    			'600': 'var(--color-gray-600)',
    			'700': 'var(--color-gray-700)',
    			'800': 'var(--color-gray-800)',
    			'900': 'var(--color-gray-900)'
    		},
    		status: {
    			success: 'var(--color-status-success)',
    			warning: 'var(--color-status-warning)',
    			danger: 'var(--color-status-danger)',
    			info: 'var(--color-status-info)'
    		},
    		text: {
    			primary: 'var(--color-text-primary)',
    			secondary: 'var(--color-text-secondary)',
    			inverse: 'var(--color-text-inverse)'
    		}
    	},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
