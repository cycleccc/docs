# wangEditor v5 doc

线上地址：https://cycleccc.github.io/docs/

## 本地开发

使用 [VitePress](https://vitepress.dev/zh/) 搭建的文档。

全局安装 vuepress `npm install vitepress -g`

下载当前代码，然后启动

```shell
pnpm install     # 安装依赖
pnpm docs:dev # 启动，浏览器访问 http://localhost:8080/
```

## 发布上线

提交 main 分支代码，即可触发 [github actions](https://github.com/cycleccc/docs/actions) 并发布上线。
