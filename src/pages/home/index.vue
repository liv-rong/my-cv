<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-[calc(100vh-91px)]"
  >
    <h1 class="text-4xl font-bold text-orange-500">
      用 Markdown 写简历！ OhMyCV
    </h1>
    <p class="text-base text-gray-500 font-light mb-10">
      能让您轻松的制作和管理简历，它开源免费，且绝不会（也无法）收集您的数据
    </p>

    <n-button
      type="primary"
      size="large"
      @click="() => router.push('/resumes')"
    >
      开始制作简历
    </n-button>
  </div>
</template>

<style scoped></style>
