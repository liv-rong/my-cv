<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="my-8 text-2xl font-bold">我的简历</div>
    <div class="border-2 border-amber p-4 rounded-lg">
      <div
        class="h-[300px] w-[200px] border bg-amber-500"
        @click="() => router.push('/edit/1')"
      >
        +新建
      </div>
    </div>
  </div>
</template>

<style scoped></style>
