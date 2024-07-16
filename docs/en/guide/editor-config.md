# Editor Config

If you first-time use wangEditor, please see [Get Started](./getting-started.md) it to learn basic usage.


```ts{5}
import { IEditorConfig } from '@wangeditor-next/editor'

const editorConfig: Partial<IEditorConfig> = {  // TS syntax
// const editorConfig = {                       // JS syntax
    /* editor config */
}

// create editor, or Vue React <Editor> component
```

:::tip
You can use `editor.getConfig()` to checkout editor's default config
:::

## placeholder

```ts
editorConfig.placeholder = 'Type your text'
```

## readOnly

Default value is `false`. <br>
You can use `editor.enable()` and `editor.disable()` to toggle readOnly. see [Editor API](./API.md).

```ts
editorConfig.readOnly = true
```

## autoFocus

Default value is `true`.

```ts
editorConfig.autoFocus = false
```

## scroll

Default value is `true`. You can scroll editor area.

If you set `false`, **do not set `editor-container` a fixed height**, just set `min-height`.

```ts
editorConfig.scroll = false
```

:::tip
When you need to set `false`?
- Editor height increases automatically
- Want a Google doc style, see [Demo](https://cycleccc.github.io/docs/demo/like-qq-doc.html?lang=en)
:::

## maxLength onMaxLength

See [demo](https://cycleccc.github.io/docs/demo/max-length.html?lang=en).

```ts
import { IDomEditor } from '@wangeditor-next/editor'

editorConfig.maxLength = 1000
editorConfig.onMaxLength = function (editor: IDomEditor) {   // TS syntax
// editorConfig.onMaxLength = function (editor) {            // JS syntax
    // trigger this when exceed maxlength
}
```

:::tip
If you have no strong demand, do not set `maxLength`.<br>
Cause it may affect performance when text is too large.
:::

## hoverbarKeys

You can use `editor.getConfig().hoverbarKeys` to checkout default config.

![](/image/hoverbar-en.png)

:::tip
If you only unwanted hoverbar when select text, set `mode: 'simple'` when creating editor
:::

### Use element type

You can config hoverbar menu keys by element type.<br>

- You can checkout every element's type by `editor.children` , see the picture below
- You can use `editor.getAllMenuKeys()` to checkout all embedded menu keys

![](/image/elem-type-en.png)

```ts
editorConfig.hoverbarKeys = {
    'link': {
        // rewrite link element's hoverbar
        menuKeys: ['editLink', 'unLink', 'viewLink'],
    },
    'image': {
        // clear image element's hoverbar
        menuKeys: [],
    },
    // others...
}
```

### Custom match function

You can also custom a match function instead of use element type.

```ts
import { SlateNode, IDomEditor } from '@wangeditor-next/editor'

editorConfig.hoverbarKeys = {
    'text': {
        match: (editor: IDomEditor, n: SlateNode) => {    // TS syntax
        // match: (editor, n) => {                        // JS syntax
            // match your node exactly
        },
        menuKeys: [ ... ], // custom your menu keys
    },
    // others...
}
```

You can see [source code](https://github.com/cycleccc/wangEditor/blob/master/packages/editor/src/init-default-config/config/hoverbar.ts) of all default hoverbar keys config.

## onCreated

```ts
import { IDomEditor } from '@wangeditor-next/editor'

editorConfig.onCreated = (editor: IDomEditor) => {   // TS syntax
// editorConfig.onCreated = (editor) => {            // JS syntax
    // editor created
}
```

## onChange

```ts
import { IDomEditor } from '@wangeditor-next/editor'

editorConfig.onChange = (editor: IDomEditor) => {  // TS syntax
// editorConfig.onChange = (editor:) => {             // JS syntax
    // editor's content or selection changed
    console.log('content', editor.children)
}
```

## onDestroyed

You can use `editor.destroy()` to destroy editor. see [API](./API.md).

```ts
import { IDomEditor } from '@wangeditor-next/editor'

editorConfig.onDestroyed = (editor: IDomEditor) => {  // TS syntax
// editorConfig.onDestroyed = (editor) => {           // JS syntax
    // editor destroyed
}
```

## onFocus

```ts
import { IDomEditor } from '@wangeditor-next/editor'

editorConfig.onFocus = (editor: IDomEditor) => {  // TS syntax
// editorConfig.onFocus = (editor) => {           // JS syntax
    // editor focused
}
```

## onBlur

```ts
import { IDomEditor } from '@wangeditor-next/editor'

editorConfig.onBlur = (editor: IDomEditor) => {  // TS syntax
// editorConfig.onBlur = (editor) => {           // JS syntax
    // editor blur
}
```

## customPaste

You can prevent default paste event, redefine your custom paste logic.

```ts
import { IDomEditor } from '@wangeditor-next/editor'

editorConfig.customPaste = (editor: IDomEditor, event: ClipboardEvent): boolean => {  // TS syntax
// editorConfig.customPaste = (editor, event) => {                                    // JS syntax

    // event is ClipboardEvent type, see https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent

    // const html = event.clipboardData.getData('text/html') // get paste html
    // const text = event.clipboardData.getData('text/plain') // get paste text
    // const rtf = event.clipboardData.getData('text/rtf') // get paste rtf data (word, wsp...)

    // insert your custom text (sync)
    editor.insertText('xxx')

    // insert your custom text (async)
    setTimeout(() => {
        editor.insertText('yy')
    }, 1000)

    // 1. prevent default paste event.
    event.preventDefault()
    return false

    // 2. continue default paste event.
    // return true
}
```

## customAlert

Redefine your custom editor alert.

```ts
import { message } from 'antd'

editorConfig.customAlert = (s: string, t: string) => {   // TS syntax
// editorConfig.customAlert = (s, t) => {                // JS syntax
    switch (t) {
        case 'success':
            message.success(s)
            break
        case 'info':
            message.info(s)
            break
        case 'warning':
            message.warning(s)
            break
        case 'error':
            message.error(s)
            break
        default:
            message.info(s)
            break
    }
}
```

## EXTEND_CONF

Use in third-party plugin, like [mention plugin](https://github.com/cycleccc/wangEditor-plugin-mention/blob/main/README-en.md).
