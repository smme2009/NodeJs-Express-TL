module.exports = {
    apps: [
        {
            name: "tl",
            script: "./dist/app.js",
            watch: true,
            node_args: "-r module-alias/register",
        },
    ],
};