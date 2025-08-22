/** @type {import('tailwindcss').Config} */
export default {
    content: ['./*.hbs', './**/*.hbs'],
    theme: {
        extend: {
            colors: {
                // 'rgb(from var([color var]) r g b / <alpha-value>)' allows for tailwind opacity args
                // ie. 'bg-primary/50'
                'primary': 'rgb(from var(--color-primary) r g b / <alpha-value>)',
                'secondary': 'rgb(from var(--color-secondary) r g b / <alpha-value>)',
                'tertiary': 'rgb(from var(--color-tertiary) r g b / <alpha-value>)',
                'font': 'var(--color-font)',
                'heading': 'rgb(from var(--color-heading) r g b / <alpha-value>)',
            },
            backgroundImage: {
                'desktop-clutter': "url('../images/desktop_background.webp')",
                'mobile-clutter': "url('../images/mobile_background.webp')",
            },
            borderRadius: {
                xl: '0.75rem',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
