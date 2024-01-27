module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {},
    },
    variants: {
        opacity: ({ after }) => after(["disabled"]),
    },
    plugins: [],
};
