<script setup>
import { Save } from 'lucide-vue-next'
import { NTooltip } from 'naive-ui'
</script>

<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <Save
        :size="20"
        class="cursor-pointer hover:text-orange-500"
      />
    </template>
    保存
  </NTooltip>
</template>
