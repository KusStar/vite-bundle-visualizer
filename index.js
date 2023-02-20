const { visualizer } = require('rollup-plugin-visualizer')
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

  let outFile

  if (template === 'raw-data') {
    outFile = output.replace(/\.html$/, '.json')
    open = false
    console.log(`Generating ${template} result to ${outFile}...\n`)
  } else {
    outFile = output
    open = output.endsWith('.html')
  }


  build({
    plugins: [visualizer({ open, filename: outFile, title: 'Vite Bundle Visualizer', template })]
  })
}

module.exports = start
