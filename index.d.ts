type Options = {
  help?: boolean,
  template?: 'treemap' | 'sunburst' | 'network',
  output?: string,
  open?: boolean,
}

const start: (options: Options) => void

export default start;
