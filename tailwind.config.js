/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'lora': ['Lora', 'serif'],
                'open': ['"Open Sans"', 'sans-serif'],
                'merienda': ['Merienda', 'cursive'],
            },
            textColor: {
                skin: {
                    title: "var(--color-title)",
                },
            },
            borderColor: {
                skin: {
                    title: "var(--color-title)",
                },
            },
        },
    },
    plugins: [],
}
