#! /usr/bin/env node
const cac = require('cac')
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

const start = require('./index')

start({
  help: h || help,
  template,
  output,
  open: open === true || open === 'true' || Number(open) > 0
})
