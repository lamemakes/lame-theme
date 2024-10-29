/** @type {import('tailwindcss').Config} */
export default {
    content: ['./*.hbs', './**/*.hbs'],
    theme: {
        extend: {
            colors: {
                'primary-color': 'var(--color-primary)',
                'secondary-color': 'var(--color-secondary)',
                'tertiary-color': 'var(--color-tertiary)',
                'font-color': 'var(--color-font)',
                'heading-color': 'var(--color-heading)',
                'secondary-color-op': 'var(--color-secondary-op)',
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
