/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
                myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
            },
            colors: {
                primary: {
                    DEFAULT: '#cf1839',
                },
            },
        },
    },
    plugins: [],
};
