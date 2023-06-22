#! /usr/bin/env node
const cac = require('cac')
const cli = cac('vite-bundle-visualizer')
const { join } = require('path')

const DEFAULT_OUTPUT = join(__dirname, './stats.html')

cli.option('--template -t <template>', 'Template to use, options are "raw-data" (JSON), "treemap", "list", "sunburst" and "network"', {
  default: 'treemap'
})
cli.option('--output -o <filepath>', 'Output file path, should be "**/*.html" or "**/*.json"', {
  default: DEFAULT_OUTPUT,
})
cli.option('--open <open>', 'Should open browser after generated, except when template is "json"', {
  default: true
})
cli.option('--config -c <file>', 'Use specified vite config file')

cli.help()

const parsed = cli.parse()

const { template, t, h, help, output, o, open, config, c } = parsed.options

const start = require('./index')

start({
  help: help || h,
  template: template || t,
  output: output || o || DEFAULT_OUTPUT,
  open: open === true || open === 'true' || Number(open) > 0,
  config: config || c,
})
