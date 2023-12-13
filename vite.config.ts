import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
//------------------------------------

// import { defineConfig } from 'vite'
// //import react from '@vitejs/plugin-react'
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import * as path from 'path'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   // plugins: [react()],
//   plugins: [
//     reactRefresh(),
//   ],
//   resolve: {
//     alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
//   },
// })
