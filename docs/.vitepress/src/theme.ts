import type { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
    logo: "/logo.svg",
    // i18n路由
    i18nRouting: true,
    // 搜索配置（二选一）
    search: {
        // 本地离线搜索
        provider: "local",
        // 多语言搜索配置
        options: {
            locales: {
                /* 默认语言 */
                root: {
                    translations: {
                        button: {
                            buttonText: "搜索",
                            buttonAriaLabel: "搜索文档",
                        },
                        modal: {
                            noResultsText: "无法找到相关结果",
                            resetButtonTitle: "清除查询结果",
                            footer: {
                                selectText: "选择",
                                navigateText: "切换",
                                closeText: '关闭'
                            },
                        },
                    },
                },
                en: {
                    translations: {
                        button: {
                            buttonText: "Search",
                            buttonAriaLabel: "Search for Documents",
                        },
                        modal: {
                            noResultsText: "Unable to find relevant results",
                            resetButtonTitle: "Clear Query Results",
                            footer: {
                                selectText: "select",
                                navigateText: "switch",
                                closeText: 'close'
                            },
                        },
                    },
                },
            },
        },
    },
    // footer
    // footer: {
    //     message: 'Released under the MIT License.',
    //     copyright: 'Copyright © 2024 爱思彼 沪ICP备2024063367号'
    // }
};
