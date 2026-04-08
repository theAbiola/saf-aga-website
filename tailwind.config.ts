import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-green': '#001BB7',
                'dark-green': '#FF8040',
                'forest-green': '#0046FF',
                'light-green': '#F5F1DC',
                'mint-green': '#F5F1DC',
                'off-white': '#FAFAF9',
                'dark-gray': '#1F2937',
                'medium-gray': '#9CA3AF',
                'light-gray': '#E5E7EB',
                'error-red': '#EF4444',
                'success-green': '#10B981',
            },
            spacing: {
                'xs': '2px',
                'xxs': '4px',
                'sm': '8px',
                'base': '12px',
                'md': '16px',
                'lg': '20px',
                'xl': '24px',
                '2xl': '32px',
                '3xl': '40px',
                '4xl': '48px',
                '5xl': '60px',
                '6xl': '80px',
            },
            fontSize: {
                'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
                'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
                'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
                'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
                'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
                'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
                'caption': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
export default config
