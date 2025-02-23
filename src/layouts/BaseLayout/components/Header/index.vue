<script setup lang="ts">
import { AppMetadata } from '@/constants/index.ts'
const { APP_NAME } = AppMetadata
import { useRouter } from 'vue-router'
const router = useRouter()
import Github from './components/github/index.vue'
import Resume from './components/resume/index.vue'
import Save from './components/Save/index.vue'
import LayoutIcon from './components/LayoutIcon/index.vue'
</script>

<template>
  <n-layout-header
    bordered
    class="h-16 flex justify-between items-center px-2"
  >
    <div
      class="flex items-center justify-center gap-2 cursor-pointer"
      @click="() => router.push('/')"
    >
      <img
        class="-mb-2 cursor-pointer pb-2"
        src="../../../../assets/logo.png"
        alt=""
        loading="eager"
        width="26"
      />
      <span class="text-xl text-orange-500">{{ APP_NAME }}</span>
    </div>

    <div class="flex gap-2 justify-end items-center">
      <Resume />
      <Github />
      <Save />
      <LayoutIcon />
    </div>
  </n-layout-header>
</template>

<style scoped></style>
