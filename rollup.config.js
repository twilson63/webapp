import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    sourcemap:false,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      dev: true,
      css: css => css.write('public/build/bundle.css')
    }),
    resolve({
      browser: true,
      dedupe: 'svelte'
    }),
    commonjs()
  ]
}

