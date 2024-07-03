export const sidebar = {
    // VitePress 相关侧边栏
    '/vitepress/': [
        {
            text: "VitePress 简介",
            items: [
                { text: "开始", link: "/vitepress/introduction/start" },
                { text: "功能", link: "/vitepress/introduction/features" },
                { text: "配置", link: "/vitepress/introduction/config" },
            ],
            collapsed: false,
        },
        {
            text: "VitePress 指南",
            items: [
                { text: "Markdown 扩展", link: "/vitepress/guide/markdown" },
                { text: "主题配置", link: "/vitepress/guide/theme" },
                { text: "部署", link: "/vitepress/guide/deployment" },
            ],
            collapsed: false,
        },
    ],
    // Markdown 相关侧边栏
    '/markdown/': [
        {
            text: "Markdown 简介",
            items: [
                { text: "开始", link: "/markdown/introduction/start" },
                { text: "功能", link: "/markdown/introduction/features" },
                { text: "配置", link: "/markdown/introduction/config" },
            ],
            collapsed: false,
        },
        {
            text: "Markdown 指南",
            items: [
                { text: "类型系统", link: "/markdown/guide/types" },
                { text: "编译选项", link: "/markdown/guide/compiler" },
                { text: "高级用法", link: "/markdown/guide/advanced" },
            ],
            collapsed: false,
        },
    ],
    // 关于相关侧边栏
    '/examples/about/': [
        {
            text: "关于我们",
            items: [
                { text: "团队", link: "/examples/about/team" },
                { text: "常见问题", link: "/examples/about/problem" },
            ],
            collapsed: false,
        },
    ],
};
