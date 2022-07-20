const { visualizer } = require('rollup-plugin-visualizer')
const { join } = require('path')
const Module = require('module')

const start = ({
  help,
  template = 'treemap',
  open,
  output
}) => {
  if (help) {
    return
  }

  // start requiring from cwd's node_modules
  const _module = new Module()
  _module.paths = Module._nodeModulePaths(process.cwd())
  const { build } = _module.require('vite')

  const outFile = typeof output === 'string' && output.endsWith('.html') ? output : join(__dirname, './stats.html')

  build({
    plugins: [visualizer({ open, filename: outFile, title: 'Vite Bundle Visualizer', template })]
  })
}

module.exports = start
