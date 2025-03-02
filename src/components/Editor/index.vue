<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

import * as monaco from 'monaco-editor'

import markdownit from 'markdown-it'

import hljs from 'highlight.js' // https://highlightjs.org

const md = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (err) {
        console.log(err)
      }
    }

    return '' // use external default escaping
  }
})
const result = md.render('# it!')

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
      language: 'markdown'
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
  <div>
    <div
      ref="editorRef"
      class="h-[400px] w-full px-2 bg-red-1"
    ></div>

    <div v-html="result"></div>
  </div>
</template>

<style scoped></style>
