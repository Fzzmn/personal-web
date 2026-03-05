import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/**/*.{vue,ts,js}',
        './components/**/*.{vue,ts,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{ts,js}',
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Terminal dark teal palette
                base: {
                    bg: '#0a0f1a',
                    card: '#1e2a3a',
                    nav: '#243a4f',
                    'nav-active': '#2f4d66',
                    border: '#2a3f55',
                },
                term: {
                    text: '#c8d6e5',
                    muted: '#6b7f94',
                    label: '#4dc9b0',
                    link: '#c8d6e5',
                    dot: {
                        green: '#50c878',
                        blue: '#5b9bd5',
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config
