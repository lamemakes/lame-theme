/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
      extend: {
        colors: {
          "primary-color": "var(--color-primary)",
          "secondary-color": "var(--color-secondary)",
          "tertiary-color": "var(--color-tertiary)",
          "font-color": "var(--color-font)",
          "heading-color": "var(--color-heading)"
        },
        backgroundImage: {
          'desktop-clutter': "url('../images/desktop_background.webp')",
          'mobile-clutter': "url('../images/mobile_background.webp')"
        }
      }
  },
  plugins: [
      require('@tailwindcss/typography')
  ]
}
