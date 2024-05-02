<script setup lang="ts">
import { AppMetadata } from '@/constants/index.ts'
const { APP_NAME } = AppMetadata
</script>

<template>
  <n-layout-header
    bordered
    class="h-16 flex justify-between items-center px-2"
  >
    <div class="flex items-center justify-center gap-2">
      <img
        class="-mb-2 cursor-pointer pb-2"
        src="../../../../assets/logo.png"
        alt=""
        loading="eager"
        width="26"
      />
      <span class="text-xl text-orange-500 font-bold">{{ APP_NAME }}</span>
    </div>

    <div>Header</div>
  </n-layout-header>
</template>

<style scoped></style>
