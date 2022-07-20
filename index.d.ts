type Options = {
  help?: boolean,
  template?: 'treemap' | 'sunburst' | 'network',
  output?: string,
  open?: boolean,
}

declare const start: (options: Options) => void

export default start;
