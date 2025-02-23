<script setup lang="ts">
import Editor from '@/components/Editor/index.vue'
import Preview from '@/components/Preview/index.vue'
import Operate from '@/components/Operate/index.vue'
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
      <template #1> <Editor /> </template>
      <template #2> <Preview /></template>
    </NSplit>
  </div>
</template>

<style scoped></style>
