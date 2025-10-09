module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./public/index.html",
    ],
    safelist: [
        'sword-gauntlet',
    ],
    theme: {
        extend: {
            cursor: {
                'gauntlet': 'url("/gauntlet-cursor.png"), pointer',
            },
        },
    },
    plugins: [],
};
