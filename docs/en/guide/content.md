# Content

## Get Content

### Get HTML and Text

Use `editor.getHtml()` to get HTML content, see [demo](https://cycleccc.github.io/demo/get-html.html?lang=en). Use `editor.getText()` to get text content.

PS: HTML format is recommended.

### Get JSON

Use `editor.children` to get JSON content.

You can convert JSON to HTML or text format in browser and nodejs.<br>
If in nodejs, you should exec `yarn add jsdom global-jsdom` firstly, then `require('global-jsdom/register')` in front of the below codes.

```js
const editor = createEditor({ content }) // `content` is JSON content
const html = editor.getHtml()
const text = editor.getText()
```

### Custom Style

`editor.getHtml()` can only get pure HTML, there is no inline styles. You need to define your custom style. See some demos:
- [Get and render HTML](https://cycleccc.github.io/demo/get-html.html?lang=en)
- [Custom CSS style](https://cycleccc.github.io/demo/css/view.css)

You should use [Prism.js](https://prismjs.com/) to highlight code block by yourself. See [demo](https://cycleccc.github.io/demo/code-highlight.html?lang=en).

## Set Content

You can set your custom content when creating an editor.

### Set HTML

<b style="color: red;">Be careful: wangEditor can only understand the HTML format from `editor.getHtml()`, but not all HTML formats.</b>

For instance, wangEditor can understand `<strong>hello</strong>`, but can not understand `<span style="font-weight:bold;"></span>`.

### Set HTML when create editor

```js
const editor = createEditor({
  html: '<p>hello <strong>world</strong></p>', // html content, got from `editor.getHtml()`
  // other props ...
})
```

### Set HTML after create editor

See [demo](https://cycleccc.github.io/demo/set-html.html?lang=en)

```js
editor.setHtml('<p>hello <strong>world</strong></p>')
```

:::tip
`setHtml` is mainly used for re-write editor HTML content which got by `editor.getHtml()`.<br>
If you want to insert some HTML, use [dangerouslyInsertHtml](./API.md#dangerouslyinserthtml) please.
:::

### Set Text

```js
// 1. Convert text to HTML format
const text = '...' // text content
const html = text.split(/\n/).map(line => `<p>${line}</p>`).join('\n')

// 2. set HTML
const editor = createEditor({
  html,
  // other props ...
})

// 3. or setHtml after create editor
// editor.setHtml(html)
```

### Set JSON

```js
const editor = createEditor({
  content: [...], // JSON content, got from `editor.children`
  // other props ...
})
```

### Ajax async set content

You can create editor after ajax success callback.

```js
// pseudo code
import { IDomEditor } from '@wangeditor-next/editor'

let editor: IDomEditor | null = null  // TS syntax
// let editor = null                  // JS syntax

ajax(url, res => {
  editor = createEditor({
    // content or html
    // other props...
  })
})
```

::: tip
Goto [API](./API.md) to checkout more content APIs.
:::
