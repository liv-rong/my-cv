<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

import * as monaco from 'monaco-editor'

const editorRef = ref<HTMLDivElement | null>(null)

self.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    const getWorkerModule = (moduleUrl: string) => {
      return new Worker(self.MonacoEnvironment.getWorkerUrl(moduleUrl), {
        name: label,
        type: 'module'
      })
    }

    switch (label) {
      case 'json':
        return getWorkerModule(
          '/monaco-editor/esm/vs/language/json/json.worker?worker'
        )
      case 'css':
      case 'scss':
      case 'less':
        return getWorkerModule(
          '/monaco-editor/esm/vs/language/css/css.worker?worker'
        )
      case 'html':
      case 'handlebars':
      case 'razor':
        return getWorkerModule(
          '/monaco-editor/esm/vs/language/html/html.worker?worker'
        )
      case 'typescript':
      case 'javascript':
        return getWorkerModule(
          '/monaco-editor/esm/vs/language/typescript/ts.worker?worker'
        )
      default:
        return getWorkerModule(
          '/monaco-editor/esm/vs/editor/editor.worker?worker'
        )
    }
  }
}

let editorInstance: monaco.editor.IStandaloneCodeEditor | null = null

onMounted(() => {
  if (editorRef.value) {
    editorInstance = monaco.editor.create(editorRef.value, {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: 'javascript'
    })
  }
})

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.dispose()
  }
})
</script>

<template>
  <div
    ref="editorRef"
    class="h-full w-full px-2 bg-red-1"
  />
</template>

<style scoped></style>
