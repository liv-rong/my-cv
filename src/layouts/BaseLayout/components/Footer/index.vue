<script setup lang="ts">
import { AppMetadata } from '@/constants/index.ts'
const { APP_NAME, VERSION, AUTHOR } = AppMetadata
</script>

<template>
  <n-layout-footer
    bordered
    class="h-16 flex justify-center items-center"
  >
    <div class="h-full flex justify-center items-center gap-2">
      <span>{{ APP_NAME }} - v{{ VERSION }}</span>
      <span>©</span>
      <img
        class="-mb-2 cursor-pointer pb-2 transition-all hover:-translate-y-1 hover:scale-110 active:-translate-y-0 active:scale-105 active:opacity-75"
        src="../../../../assets/logo.png"
        alt=""
        loading="eager"
        width="26"
      />
      <span>{{ AUTHOR }}</span>
    </div>
  </n-layout-footer>
</template>
