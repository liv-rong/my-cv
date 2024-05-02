<script setup lang="ts">
import Create from '@/components/Create/index.vue'
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="my-8 text-2xl font-bold">我的简历</div>
    <div class="border-2 border-amber p-4 rounded-lg">
      <Create />
    </div>
  </div>
</template>

<style scoped></style>
