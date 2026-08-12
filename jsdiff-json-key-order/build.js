import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { build } from 'esbuild'

const template = await readFile(new URL('./index.template.html', import.meta.url), 'utf8')
const result = await build({
  bundle: true,
  entryPoints: [new URL('./app.js', import.meta.url).pathname],
  format: 'iife',
  legalComments: 'none',
  platform: 'browser',
  write: false,
})

const bundle = result.outputFiles[0].text
const html = template.replace('<!-- APP_BUNDLE -->', `<script>${bundle}</script>`)

await mkdir(new URL('./dist/', import.meta.url), { recursive: true })
await writeFile(new URL('./dist/index.html', import.meta.url), html)
await mkdir(new URL('../docs/', import.meta.url), { recursive: true })
await copyFile(
  new URL('./dist/index.html', import.meta.url),
  new URL('../docs/jsdiff-json-key-order.html', import.meta.url),
)

console.log('Built dist/index.html and docs/jsdiff-json-key-order.html')
