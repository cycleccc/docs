export const sidebar = {
    // VitePress 相关侧边栏
    '/en/vitepress/': [
        {
            text: "VitePress Introduction",
            items: [
                { text: "Start", link: "/en/vitepress/introduction/start" },
                { text: "Features", link: "/en/vitepress/introduction/features" },
                { text: "Config", link: "/en/vitepress/introduction/config" },
            ],
            collapsed: false,
        },
        {
            text: "VitePress Guide",
            items: [
                { text: "Markdown Extension", link: "/en/vitepress/guide/markdown" },
                { text: "Theme", link: "/en/vitepress/guide/theme" },
                { text: "Deployment", link: "/en/vitepress/guide/deployment" },
            ],
            collapsed: false,
        },
    ],
    // Markdown 相关侧边栏
    '/en/markdown/': [
        {
            text: "Markdown Intro",
            items: [
                { text: "Start", link: "/en/markdown/introduction/start" },
                { text: "Features", link: "/en/markdown/introduction/features" },
                { text: "Config", link: "/en/markdown/introduction/config" },
            ],
            collapsed: false,
        },
        {
            text: "Markdown Guide",
            items: [
                { text: "Type", link: "/en/markdown/guide/types" },
                { text: "Compiler", link: "/en/markdown/guide/compiler" },
                { text: "Advanced", link: "/en/markdown/guide/advanced" },
            ],
            collapsed: false,
        },
    ],
    // 关于相关侧边栏
    '/en/examples/about/': [
        {
            text: "About us",
            items: [
                { text: "Team", link: "/en/examples/about/team" },
                { text: "Q&A", link: "/en/examples/about/problem" },
            ],
            collapsed: false,
        },
    ],
};
