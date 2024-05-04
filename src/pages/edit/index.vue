<script setup lang="ts">
import Editor from '@/components/Editor/index.vue'
import Preview from '@/components/Preview/index.vue'
import Operate from '@/components/Operate/index.vue'
</script>

<template>
  <div
    class="flex justify-between items-center w-full h-[calc(100vh-91px)] border border-solid"
  >
    <div class="flex justify-between items-center flex-1 h-full">
      <div class="h-full">
        <Editor />
      </div>
      <div class="bg-bluegray w-2 h-full cursor-move" />
      <div class="h-full overflow-auto p-2">
        <Preview />
      </div>
    </div>
    <div class="w-[200px] h-full border-2 border-l-solid border-l-amber-500">
      <Operate />
    </div>
  </div>
</template>

<style scoped></style>
