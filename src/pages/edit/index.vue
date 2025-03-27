<script setup lang="ts">
import { ref } from 'vue'

import Editor from '@/components/Editor/index.vue'
import Preview from '@/components/Preview/index.vue'
import Operate from '@/components/Operate/index.vue'

const valueMd = ref('## md')

const handleValueMd = (value: string) => {
  valueMd.value = value
}
</script>

<template>
  <div
    class="flex justify-between items-center w-full h-[calc(100vh-91px)] border border-solid"
  >
    <NSplit
      min="200px"
      max="800px"
      default-size="50%"
    >
      <template #1>
        <Editor
          :valueMd="valueMd"
          @handleValueMd="handleValueMd"
        />
      </template>
      <template #2> <Preview :valueMd="valueMd" /></template>
    </NSplit>
  </div>
</template>

<style scoped></style>
