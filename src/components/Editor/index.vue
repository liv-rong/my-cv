<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import type * as Monaco from 'monaco-editor'

import { setupMonacoEditor } from '@/components/Monaco'

import { useDataStore } from '@/store/data'

const editorRef = ref<HTMLDivElement>()

// let editor:
//   | {
//       editor: Monaco.editor.IStandaloneCodeEditor
//       models: {
//         [key: string]: {
//           getModel: () => Monaco.editor.ITextModel
//           activate: () => void
//           dispose: () => void
//         }
//       }
//       dispose: () => void
//     }
//   | undefined

// // Change model
// const activate = (value: 'markdown' | 'css') => {
//   editor?.models[value].activate()
// }

// // Setup Monaco editor
// onMounted(async () => {
//   if (editorRef.value && !editor) {
//     editor = await setupMonacoEditor(editorRef.value)
//     activate('markdown')
//   }
// })

// onBeforeUnmount(() => editor?.dispose())

// // Watch the updates of editor content on other places
// const { data, toggleMdFlag, toggleCssFlag } = useDataStore()

// watch(
//   () => data.mdFlag,
//   () => {
//     console.log('mdFlag changed')
//     if (data.mdFlag) {
//       editor?.models['markdown'].getModel().setValue(data.mdContent)
//       toggleMdFlag(false)
//     }
//   }
// )

// watch(
//   () => data.cssFlag,
//   () => {
//     if (data.cssFlag) {
//       editor?.models['css'].getModel().setValue(data.cssContent)
//       toggleCssFlag(false)
//     }
//   }
// )
</script>

<template>
  <div
    ref="editorRef"
    class="h-full w-full px-2"
  />
</template>

<style scoped></style>
