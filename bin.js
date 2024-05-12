#!/usr/bin/env node

import cac from 'cac'
import * as path from 'node:path'
import * as tmp from 'tmp'
import start from './index.js'

const cli = cac('vite-bundle-visualizer')

const tmpobj = tmp.dirSync();

const DEFAULT_OUTPUT = path.join(tmpobj.name, 'stats.html');

cli.help()

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

cli.option('--entry --input -i', 'Use specified entry file, default is "index.html"')

cli.option('--sourcemap ', 'use sourcemap to calculate sizes of modules. By idea it will present more accurate results, defaults is false')

cli.option('--sourcemap ', 'use sourcemap to calculate sizes of modules. By idea it will present more accurate results, defaults is false')

cli.option('--mode -m <mode>', 'set env mode, defaults to production')

const parsed = cli.parse()

const {
  template, t,
  h, help,
  output, o,
  open,
  config, c,
  entry, input, i,
  sourcemap,
  mode, m,
} = parsed.options

await start({
  help: help || h,
  template: template || t,
  output: output || o || DEFAULT_OUTPUT,
  open: open === true || open === 'true' || Number(open) > 0,
  config: config || c,
  entry: entry || input || i,
  mode: mode || m,
  sourcemap
})
