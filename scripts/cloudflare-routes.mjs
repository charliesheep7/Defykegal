// Writes out/_headers and out/_redirects for Cloudflare from next.config's
// headers() and redirects(), which `output: 'export'` does not apply.
import { createRequire } from 'module'
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { join, relative } from 'path'

const require = createRequire(import.meta.url)
let config = require('../next.config.js')
if (typeof config === 'function')
  config = await config('phase-production-build', { defaultConfig: {} })

// Next path patterns -> Cloudflare: `/(.*)` and `:name*` become splats
function toCloudflare(pattern) {
  return pattern.replace(/\/\(\.\*\)$/, '/*').replace(/\/:(\w+)\*$/, '/*')
}

function splatTarget(source, destination) {
  const m = source.match(/\/:(\w+)\*$/)
  return m ? destination.replace(`:${m[1]}*`, ':splat').replace(`:${m[1]}`, ':splat') : destination
}

const headerRules = config.headers ? await config.headers() : []
const headerLines = headerRules.flatMap(({ source, headers }) => [
  toCloudflare(source),
  ...headers.map(({ key, value }) => `  ${key}: ${value}`),
  '',
])
headerLines.push('/_next/static/*', '  Cache-Control: public, max-age=31536000, immutable', '')

// Generated metadata images are exported without an extension, so name their type
const metadataImages = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? metadataImages(join(dir, e.name))
      : /^(opengraph-image|twitter-image)$/.test(e.name)
        ? ['/' + relative('out', join(dir, e.name))]
        : []
  )
for (const path of metadataImages('out')) headerLines.push(path, '  Content-Type: image/png', '')
writeFileSync('out/_headers', headerLines.join('\n'))

const redirectRules = config.redirects ? await config.redirects() : []
const redirectLines = redirectRules.map(({ source, destination, permanent, statusCode }) => {
  const code = statusCode ?? (permanent ? 308 : 307)
  return `${toCloudflare(source)} ${splatTarget(source, destination)} ${code}`
})
writeFileSync('out/_redirects', redirectLines.join('\n') + '\n')

console.log(
  `cloudflare-routes: ${headerRules.length} header rule(s), ${redirectRules.length} redirect(s)`
)

// The site has one root layout, so every exported page says <html lang="en">.
// Give the localized pages (out/de.html, out/de/**.html, ...) their real lang.
const htmlFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? htmlFiles(join(dir, e.name))
      : e.name.endsWith('.html')
        ? [join(dir, e.name)]
        : []
  )
let relabelled = 0
for (const lang of ['de', 'fr', 'es', 'it']) {
  const files = [
    ...(existsSync(`out/${lang}.html`) ? [`out/${lang}.html`] : []),
    ...(existsSync(`out/${lang}`) ? htmlFiles(`out/${lang}`) : []),
  ]
  for (const file of files) {
    const html = readFileSync(file, 'utf8')
    const next = html.replace(/<html lang="en"/, `<html lang="${lang}"`)
    if (next !== html) {
      writeFileSync(file, next)
      relabelled++
    }
  }
}
console.log(`cloudflare-routes: set <html lang> on ${relabelled} localized page(s)`)
