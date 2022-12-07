# vite-bundle-visualizer

Visualize vite bundle, like [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

Use [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer).

## Usage

```shell
# In your vite project's root
npx vite-bundle-visualizer
# Then open stats.html in browser
```

```shell
$ vite-bundle-visualizer --help

vite-bundle-visualizer

Usage:
  $ vite-bundle-visualizer <command> [options]

Options:
  --template <template>  Template to use, options are "treemap", "sunburst" and "network" (default: treemap)
  --output <output>      Output file path, should be **/*.html
  --open <open>          Should open browser after generated (default: true)
  -h, --help             Display this message
```

## Screenshots

### Visualizer Templates

#### Treemap

`vite-bundle-visualizer`

![treemap](./screenshots/treemap.png)

#### Sunburst

`vite-bundle-visualizer --template sunburst`

![sunburst](./screenshots/sunburst.png)

#### Network

`vite-bundle-visualizer --template network`

![network](./screenshots/network.jpg)

## Dependencies

- [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)

## License

[MIT](LICENSE)
