#! /usr/bin/env node

const { visualizer } = require('rollup-plugin-visualizer')
const { join } = require('path')

// start requiring from cwd's node_modules
const Module = require('module')
const _module = new Module()
_module.paths = Module._nodeModulePaths(process.cwd())
const { build } = _module.require('vite')

build({
  plugins: [visualizer({ open: true, filename: join(__dirname, './stats.html'), title: 'Vite Bundle Visualizer' })]
})
