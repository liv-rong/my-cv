import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      dts: './auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ['default', 'axios'] // import { default as axios } from 'axios',
          ],
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        },

        //引入类型
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true
        }
      ],

      // Enable auto import by filename for default module exports under directories
      defaultExportByFilename: false
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})
