import type { DefaultTheme } from "vitepress";

export default function getNav() {
    return [
        { text: "Home", link: "/en/" },
        { text: "VitePress", link: "/en/vitepress/introduction/start", activeMatch: "^/en/vitepress/introduction" },
        { text: "Markdown", link: "/en/markdown/introduction/start", activeMatch: "^/en/markdown/introduction" },
        {
            text: "About",
            items: [
                {
                    text: "Team",
                    link: "/en/examples/about/team",
                    activeMatch: "/en/examples/about/team",
                },
                {
                    text: "Q&A",
                    link: "/en/examples/about/problem",
                    activeMatch: "/en/examples/about/problem",
                },
            ],
            activeMatch: "/en/examples/about/", // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
        },
    ]

};
