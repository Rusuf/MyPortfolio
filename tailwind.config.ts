
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cosmic Theme Colors
				cosmic: {
					space: '#0A0A23',
					'space-dark': '#050510',
					nebula: '#4B0082',
					'nebula-dark': '#220033',
					star: '#F5F5F5',
					'star-dark': '#D0D0D0', 
					galaxy: '#1E90FF',
					'galaxy-dark': '#0A6AAD',
					neon: '#FF69B4',
					'neon-dark': '#D84F98',
					electric: '#00FFFF',
					'electric-dark': '#00C7C7'
				}
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rocket-launch': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-10px)' }
				},
				'comet': {
					'0%': { transform: 'translateX(-100%) translateY(-100%)', opacity: '0' },
					'10%, 90%': { opacity: '1' },
					'100%': { transform: 'translateX(100vw) translateY(100vh)', opacity: '0' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px #FF69B4, 0 0 10px #FF69B4' },
					'50%': { boxShadow: '0 0 20px #FF69B4, 0 0 30px #FF69B4' }
				},
				'black-hole': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'50%': { transform: 'scale(15)', opacity: '0.8' },
					'100%': { transform: 'scale(30)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'twinkle': 'twinkle 3s ease-in-out infinite',
				'orbit': 'orbit 20s linear infinite',
				'float': 'float 5s ease-in-out infinite',
				'rocket-launch': 'rocket-launch 1s ease-out',
				'comet': 'comet 10s linear',
				'glow': 'glow 2s ease-in-out infinite',
				'black-hole': 'black-hole 0.5s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
