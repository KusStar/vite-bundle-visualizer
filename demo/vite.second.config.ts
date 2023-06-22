import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function testPlugin(): PluginOption {
  return {
    name: 'vite-plugin-test',
    transform(src, id) {
      console.log('transform', id, src.length)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), testPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
