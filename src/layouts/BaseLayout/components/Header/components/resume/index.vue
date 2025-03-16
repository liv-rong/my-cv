<script setup>
import { useRouter } from 'vue-router'
import { LayoutGrid } from 'lucide-vue-next'
import { NTooltip, NIcon } from 'naive-ui'
const router = useRouter()
</script>

<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NIcon size="20">
        <LayoutGrid
          :size="20"
          class="cursor-pointer hover:text-orange-500"
          @click="() => router.push('/resumes')"
        />
      </NIcon>
    </template>
    编辑
  </NTooltip>
</template>
