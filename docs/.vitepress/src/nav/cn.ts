import type { DefaultTheme } from "vitepress";

export default function getNav(): DefaultTheme.NavItem[] {
    return [
        { text: "主页", link: "/" },
        { text: "VitePress", link: "/vitepress/introduction/start", activeMatch: "^/vitepress/introduction" },
        { text: "Markdown", link: "/markdown/introduction/start", activeMatch: "^/markdown/introduction" },
        {
            text: "关于",
            items: [
                {
                    text: "团队",
                    link: "/examples/about/team",
                    activeMatch: "/examples/about/team",
                },
                {
                    text: "常见问题",
                    link: "/examples/about/problem",
                    activeMatch: "/about/problem",
                },
            ],
            activeMatch: "/examples/about/",
        },
    ];
}
