import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
//引入以上配置 是英文界面需要修改en为en
import getNav from "../nav/en";
import { sidebar } from '../sidebar/en'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        lastUpdatedText: 'Last Updated',
        returnToTopLabel: 'Back to top',
        // 文档页脚文本配置
        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },
        //   editLink: {
        //     pattern: '路径地址',
        //     text: '对本页提出修改建议',
        //   },
        logo: "/logo.svg",
        nav: getNav(),
        sidebar,
        outline: {
            level: "deep", // 右侧大纲标题层级
            label: "Category", // 右侧大纲标题文本配置
        },
        footer: {
            copyright: 'Copyright © 2024 - <a href="https://asib.asia" target="_self">ASIB</a> - <a href="https://beian.miit.gov.cn" target="_blank">沪ICP备2024063367号</a>',
        },
    },
}
