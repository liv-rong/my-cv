<script setup>
import { useRouter } from 'vue-router'
import { LayoutGrid } from 'lucide-vue-next'
import { NTooltip } from 'naive-ui'
const router = useRouter()
</script>

<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <LayoutGrid
        :size="20"
        class="cursor-pointer hover:text-orange-500"
        @click="() => router.push('/resumes')"
      />
    </template>
    编辑
  </NTooltip>
</template>
