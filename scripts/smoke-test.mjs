import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const distDir = path.resolve('dist')
const html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const jsFile = fs.readdirSync(path.join(distDir, 'assets')).find((f) => f.endsWith('.js'))
const jsPath = path.join(distDir, 'assets', jsFile)

const dom = new JSDOM(html, {
  url: 'http://localhost/',
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true,
})

const { window } = dom

// Stub browser APIs jsdom doesn't implement, that framer-motion / IntersectionObserver-based code needs
window.matchMedia = window.matchMedia || function () {
  return { matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }
}
class IO {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = IO
window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} }
window.requestAnimationFrame = (cb) => setTimeout(cb, 16)
window.cancelAnimationFrame = (id) => clearTimeout(id)
window.scrollTo = () => {}

let caughtErrors = []
window.addEventListener('error', (e) => {
  caughtErrors.push(e.error ? (e.error.stack || e.error.message) : e.message)
})

const scriptContent = fs.readFileSync(jsPath, 'utf-8')
const scriptEl = window.document.createElement('script')
scriptEl.type = 'module'
// jsdom doesn't execute type=module via textContent injection reliably; use a classic wrapper via Function eval on window context instead
window.document.head.appendChild(scriptEl)

try {
  // Execute the bundle in the jsdom window context directly
  dom.window.eval(scriptContent)
} catch (err) {
  caughtErrors.push('SYNC EVAL ERROR: ' + (err.stack || err.message))
}

setTimeout(() => {
  const root = window.document.getElementById('root')
  console.log('--- Root innerHTML length ---', root ? root.innerHTML.length : 'NO ROOT')
  console.log('--- Root has content? ---', root && root.innerHTML.length > 100)
  console.log('--- Caught errors ---')
  if (caughtErrors.length === 0) console.log('(none)')
  caughtErrors.forEach((e, i) => console.log(`[${i}]`, e))
  process.exit(caughtErrors.length > 0 ? 1 : 0)
}, 1500)
