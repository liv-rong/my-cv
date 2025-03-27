<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

import * as monaco from 'monaco-editor'

import markdownit from 'markdown-it'

import hljs from 'highlight.js'

const props = defineProps({
  valueMd: String
})

const emit = defineEmits<{
  handleValueMd: [value: string]
}>()

const md = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (err) {
        console.log(err)
      }
    }
    return ''
  }
})
let result = md.render(props.valueMd)

const editorRef = ref<HTMLDivElement | null>(null)

let editorInstance: monaco.editor.IStandaloneCodeEditor | null = null

onMounted(() => {
  if (editorRef.value) {
    editorInstance = monaco.editor.create(editorRef.value, {
      value: props.valueMd,
      language: 'markdown',
      automaticLayout: true
    })
    editorInstance.onDidChangeModelContent(() => {
      // console.log(editorInstance?.getValue())
      emit('handleValueMd', editorInstance?.getValue() ?? '')
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
  <div class="w-full bg-green-200">
    <div
      ref="editorRef"
      class="h-[400px] w-full px-2 bg-red-1"
    ></div>
  </div>
</template>

<style scoped></style>
