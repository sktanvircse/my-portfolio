/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0f1f",   // dark navy
                text: "#e2e8f0",        // light gray
                accent: "#22c55e",      // green
                accentHover: "#3b82f6", // blue
            },
        },
    },
    plugins: [],
};
 