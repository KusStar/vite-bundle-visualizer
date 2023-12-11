import { visualizer } from 'rollup-plugin-visualizer'
import importFrom from 'import-from-esm'
import * as fs from 'node:fs'

const start = async ({
  help,
  template = 'treemap',
  open,
  output,
  config,
  entry,
  sourcemap = false
}) => {
  if (help) {
    return
  }

  // fallback to 'raw-data'
  if (template === 'json') {
    template = 'raw-data'
  }

  // import from cwd's node_modules
  /** @type {import('vite')} */
  const { build } = await importFrom(process.cwd(), 'vite')

  let outFile

  if (template === 'raw-data') {
    outFile = output.replace(/\.html$/, '.json')
    open = false
  } else if (template === 'list') {
    outFile = output.replace(/\.html$/, '.yml')
    open = false
  } else {
    outFile = output

    // Only open it if the command is passed an it is an html file.
    if (open) {
      open = output.endsWith('.html')
    }
  }

  const viteBuildOptions = {}

  if (entry || sourcemap) {
    viteBuildOptions.rollupOptions = {}
    if (entry != undefined) {
      viteBuildOptions.rollupOptions.input = {
        app: entry
      }
    }
    if (sourcemap != undefined) {
      viteBuildOptions.sourcemap = sourcemap
    }
  }

  await build({
    configFile: config,
    plugins: [
      {
        ...visualizer({
          open,
          filename: outFile,
          title: 'Vite Bundle Visualizer',
          template,
          brotliSize: true,
          gzipSize: true,
          sourcemap,
        }),
        enforce: 'post'
      },
    ],
    build: {
      ...viteBuildOptions
    }
  }).then(() => {
    // fix encoding for list template
    if (template === 'list') {
      const tent = Buffer.from(fs.readFileSync(outFile)).toString().replaceAll('\0', '')
      fs.writeFileSync(outFile, tent, { encoding: 'utf-8' });
    }
    console.log(`\nGenerated at ${outFile}`)
  })
}

export default start
