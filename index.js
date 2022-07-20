const { visualizer } = require('rollup-plugin-visualizer')
const { join } = require('path')
const Module = require('module')
const cac = require('cac')

const start = () => {
  const cli = cac('vite-bundle-visualizer')
  cli.option('--template <template>', 'Template to use, options are "treemap", "sunburst" and "network"', {
    default: 'treemap'
  })
  cli.option('--output <output>', 'Output file path, should be **/*.html')
  cli.option('--open <open>', 'Should open browser after generated', {
    default: true
  })

  cli.help()

  const parsed = cli.parse()
  const { template, h, help, output, open } = parsed.options

  if (h || help) {
    return
  }

  // start requiring from cwd's node_modules
  const _module = new Module()
  _module.paths = Module._nodeModulePaths(process.cwd())
  const { build } = _module.require('vite')

  const outFile = typeof output === 'string' && output.endsWith('.html') ? output : join(__dirname, './stats.html')

  build({
    plugins: [visualizer({ open: open === 'true' || open === true, filename: outFile, title: 'Vite Bundle Visualizer', template })]
  })
}

module.exports = start
