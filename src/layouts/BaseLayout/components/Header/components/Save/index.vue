<script setup>
import { Save } from 'lucide-vue-next'
import { NTooltip, NIcon } from 'naive-ui'
</script>

<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NIcon size="20">
        <Save
          :size="20"
          class="cursor-pointer hover:text-orange-500"
        />
      </NIcon>
    </template>
    保存
  </NTooltip>
</template>
