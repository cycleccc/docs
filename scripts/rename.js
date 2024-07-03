import fs from 'node:fs'
import { globby } from 'globby'

const paths = await globby(['docs/**/README.md'])

paths.forEach((path) => {
  fs.rename(path, path.replace(/README\.md/, 'index.md'), (err) => {
    !err && console.log(`${path} 重命名成功`)
  })
})
