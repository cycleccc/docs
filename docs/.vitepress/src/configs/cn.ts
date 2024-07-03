import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
//引入以上配置 是英文界面需要修改cn为en
import getNav from "../nav/cn"
import { sidebar } from '../sidebar/cn'

export const cnConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        lastUpdatedText: '上次更新',
        returnToTopLabel: '返回顶部',
        // 文档页脚文本配置
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        //   editLink: {
        //     pattern: '路径地址',
        //     text: '对本页提出修改建议',
        //   },
        logo: "/logo.svg",
        nav: getNav(),
        sidebar: sidebar,
        outline: {
            level: "deep", // 右侧大纲标题层级
            label: "目录", // 右侧大纲标题文本配置
        },
        footer: {
            copyright: 'Copyright © 2024 • <a href="https://asib.asia" target="_self">爱思彼</a> • <a href="https://beian.miit.gov.cn" target="_blank">沪ICP备2024063367号</a>',
        }
    },
}
